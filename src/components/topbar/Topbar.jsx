import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="topbarLink">
          <span className="topbarLogo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="topbarSearchbar">
          <Search className="topbarSearchIcon" />
          <input
            className="topbarSearchInput"
            placeholder="Search for any friends, posts or videos..."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person className="topbarIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <Chat className="topbarIcon" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <Notifications className="topbarIcon" />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <Link to="/profile">
          <img
            className="topbarProfileImage"
            src="/assets/person/9.jpeg"
            alt="person profile image"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
