import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "User A", text: "Great video!" },
    { id: 2, author: "You", text: "Thanks!", isOwn: true }
  ]);
  const [newComment, setNewComment] = useState("");

  const postComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: Date.now(), author: "You", text: newComment, isOwn: true }]);
    setNewComment("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="card">
      <h2>Comments</h2>
      <div className="comment-box">
        <input
          className="input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className="button" onClick={postComment}>Post</button>
      </div>
      <div className="comment-list">
        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <p><strong>{c.author}:</strong> {c.text}</p>
            {c.isOwn && (
              <button className="delete-button" onClick={() => deleteComment(c.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
