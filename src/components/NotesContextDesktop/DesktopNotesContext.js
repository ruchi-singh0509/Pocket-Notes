import React from "react";
import "./DesktopNotesContext.css";

function DesktopNotesContext({ note }) {
  
  return (
    <div className="desktop__notes__context__note">
      <div className="desktop__notes__context__date__time__details">
        <div className="desktop__notes__context__date">{note.date}</div>
        <div className="desktop__notes__context__time">{note.time}</div>
      </div>
      <div className="desktop__notes__context__details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default DesktopNotesContext;