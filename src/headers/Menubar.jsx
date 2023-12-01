// Menubar.js

import React, { useState } from "react";
import Sidebar from "../Sidebar";

function Menubar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
 

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <MenubarIcon onClick={handleToggleSidebar} />
      {isSidebarVisible && <Sidebar />}
    </div>
  );
}

function MenubarIcon({ onClick }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon pointer"
      style={{ width: "30px", height: "30px" }}
      onClick={onClick}
    >
      <g className="style-scope yt-icon">
        <path
          d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
          className="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
}

export default Menubar;
