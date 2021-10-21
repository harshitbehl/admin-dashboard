import React from "react";
import { Equalizer, Home, PeopleAlt, TrendingUp } from "@material-ui/icons";

import "./Sidebar.scss";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarMenu
        title={"Dashboard"}
        listSpec={[
          { text: "Home", icon: <Home /> },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Sales", icon: <TrendingUp /> },
        ]}
      />
      <SidebarMenu
        title={"Quick Menu"}
        listSpec={[
          { text: "Home", icon: <Home /> },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Sales", icon: <TrendingUp /> },
        ]}
      />
      <SidebarMenu
        title={"Notifications"}
        listSpec={[
          { text: "Home", icon: <Home /> },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Sales", icon: <TrendingUp /> },
        ]}
      />
      <SidebarMenu
        title={"Staff"}
        listSpec={[
          { text: "Home", icon: <Home /> },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Sales", icon: <TrendingUp /> },
        ]}
      />
    </div>
  );
}

export default Sidebar;
