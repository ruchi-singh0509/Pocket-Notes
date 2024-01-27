import React from "react";
import "./MobileNotesContext.css";

function MobileNotesContext({ note }) {
  return (
    <div className="mobile__notes__context__body">
      <div className="mobile__notes__context__date__time__details">
        <div className="mobile__notes__context__date">{note.date}</div>
        <div className="mobile__notes__content__time">{note.time}</div>
      </div>
      <div className="mobile__notes__context__details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default MobileNotesContext;