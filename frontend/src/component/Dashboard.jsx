import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const API_KEY = "YOUR_YOUTUBE_API_KEY";
const VIDEO_ID = "YOUR_VIDEO_ID";

export default function Dashboard() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [notes, setNotes] = useState("");
  const [noteHistory, setNoteHistory] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchVideoDetails();
    fetchComments();
  }, []);

  const fetchVideoDetails = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${VIDEO_ID}&key=${API_KEY}`
    );
    const data = await res.json();
    if (data.items.length > 0) {
      const video = data.items[0];
      setVideoDetails(video);
      setTitle(video.snippet.title);
      setDescription(video.snippet.description);
    }
  };

  const fetchComments = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${VIDEO_ID}&key=${API_KEY}`
    );
    const data = await res.json();
    setComments(data.items || []);
  };

  const postComment = () => {
    console.log("Mock post comment:", newComment);
    setNewComment("");
    fetchComments();
  };

  const updateVideo = () => {
    console.log("Mock update:", title, description);
  };

  const saveNote = () => {
    if (notes.trim() !== "") {
      setNoteHistory([...noteHistory, notes]);
      setNotes("");
    }
  };

  if (!videoDetails) return <div className="p-4">Loading video details...</div>;

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">YouTube Companion Dashboard</h1>

      {/* Video Info */}
      <div className="border rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Video Info</h2>
        <img
          src={videoDetails.snippet.thumbnails.medium.url}
          alt="Thumbnail"
          className="mb-2 rounded"
        />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2"
          placeholder="Title"
        />
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-2"
        />
        <Button onClick={updateVideo}>Update Title & Description</Button>
      </div>

      {/* Comments Section */}
      <div className="border rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <div className="flex gap-2 mb-4">
          <Input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <Button onClick={postComment}>Post</Button>
        </div>
        <div className="space-y-2">
          {comments.map((c) => (
            <div
              key={c.id}
              className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
            >
              <p className="text-sm">
                <strong>{c.snippet.topLevelComment.snippet.authorDisplayName}:</strong>{" "}
                {c.snippet.topLevelComment.snippet.textDisplay}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="border rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Video Notes</h2>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add ideas or improvements..."
          className="mb-2"
        />
        <Button onClick={saveNote} className="mb-4">
          Save Note
        </Button>
        <ul className="list-disc pl-6">
          {noteHistory.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
