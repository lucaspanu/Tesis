import React from "react";
import { Sidebar } from "semantic-ui-react";
import "./Dashboard.css";
import NavBarDashboard from "./NavBarDashboard";

function NavContainer({ children }) {
  return (
    <body>
      <NavBarDashboard />
      <Sidebar.Pusher>
        <div className="main-content">{children}</div>
      </Sidebar.Pusher>
    </body>
  );
}

export default NavContainer;
