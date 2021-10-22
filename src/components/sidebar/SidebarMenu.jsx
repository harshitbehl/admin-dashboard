import React from "react";

import "./SidebarMenu.scss";

function SidebarMenu({ title, listSpec }) {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarMenu__title">{title}</h3>
      <ul className="sidebarMenu__list">
        {listSpec.map((listItem) => (
          <li className="sidebarMenu__listItem" key={listItem.text}>
            {listItem.icon} <span>{listItem.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
