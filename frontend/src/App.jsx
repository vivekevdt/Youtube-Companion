import React from "react";
import VideoInfo from "./component/VideoInfo";
import CommentsSection from "./component/CommentSection";
import NotesSection from "./component/NotesSecttion";

function App() {
  return (
    <div className="container">
      <h1>YouTube Companion Dashboard</h1>
      <VideoInfo />
      <CommentsSection />
      <NotesSection />
    </div>
  );
}

export default App;
