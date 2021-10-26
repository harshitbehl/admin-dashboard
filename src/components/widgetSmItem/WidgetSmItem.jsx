import React from "react";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import "./WidgetSmItem.scss";

function WidgetSmItem() {
  return (
    <li className="widgetSmItem">
      <Avatar
        className="widgetSmItem__avatar"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="widgetSmItem__user-container">
        <p className="widgetSmItem__username">Dana Ivanova</p>
        <p className="widgetSmItem__user-title">Web Developer</p>
      </div>
      <button className="widgetSmItem__button">
        <Visibility />
        <span>Display</span>
      </button>
    </li>
  );
}

export default WidgetSmItem;
