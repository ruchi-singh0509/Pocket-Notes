import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/SidebarDesktop/DesktopSidebar";
import HomeDesktop from "../../components/HomeDesktop/HomeDesktop";
import DesktopNotes from "../../components/NotesDesktop/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <HomeDesktop />}
    </div>
  );
}

export default DesktopView;