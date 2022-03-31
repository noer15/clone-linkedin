import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg?auto=compress,format"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Nur Hidayat</h2>
        <h4>noer4236@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">20.21</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <p className="sidebar__statNumber">20.21</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem("React Js")}
        {recentItem("Vue js")}
        {recentItem("Laravel")}
      </div>
    </div>
  );
}

export default Sidebar;
