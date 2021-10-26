import React from "react";
import WidgetSmItem from "../widgetSmItem/WidgetSmItem";

import "./WidgetSm.scss";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSm__title">New Members</h3>
      <ul className="widgetSm__list">
        <WidgetSmItem username="Dana Ivanova" userTitle="Web Developer" />
        <WidgetSmItem username="Harshit Behl" userTitle="UI/ UX Developer" />
        <WidgetSmItem username="Jack Sparrow" userTitle="Economist" />
        <WidgetSmItem username="Nick Fury" userTitle="Financial Analyst" />
        <WidgetSmItem username="Peter Parker" userTitle="Project Manager" />
      </ul>
    </div>
  );
}

export default WidgetSm;
