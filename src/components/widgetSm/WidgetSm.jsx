import React from "react";
import WidgetSmItem from "../widgetSmItem/WidgetSmItem";

import "./WidgetSm.scss";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSm__title">New Members</h3>
      <ul className="widgetSm__list">
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
      </ul>
    </div>
  );
}

export default WidgetSm;
