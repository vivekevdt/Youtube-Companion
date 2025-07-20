import React, { useState } from "react";

const VideoInfo = () => {
  const [title, setTitle] = useState("My Awesome Video");
  const [description, setDescription] = useState("This is the video description.");

  const handleUpdate = () => {
    alert("Updated title/description (simulate API call)");
  };

  return (
    <div className="card">
      <h2>Video Info</h2>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Video Title"
      />
      <textarea
        className="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Video Description"
      />
      <button className="button" onClick={handleUpdate}>Update Info</button>
    </div>
  );
};

export default VideoInfo;
