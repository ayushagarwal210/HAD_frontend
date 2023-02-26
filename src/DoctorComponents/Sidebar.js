import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/web">
        Pateint1
      </a>
      <a className="menu-item" href="/web">
        Pateint2
      </a>
      <a className="menu-item" href="/web">
        Pateint3
      </a>
      <a className="menu-item" href="/web">
        Pateint4
      </a>
      <a className="menu-item" href="/web">
        Pateint5
      </a>
    </Menu>
  );
}
export default Sidebar;
