import React, { useState } from "react";

const NotesSection = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const saveNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="card">
      <h2>Video Notes</h2>
      <textarea
        className="textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write ideas to improve this video..."
      />
      <button className="button" onClick={saveNote}>Save Note</button>

      <ul className="note-list">
        {notes.map((n, i) => (
          <li key={i}>&#8226; {n}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesSection;
