import React from 'react';
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className='sidebarContainer'>
      <div className="sidebarWrapper">
        <ul className="sidebarLists">
            <li className="sidebarListItem">
                <RssFeed className="sidebarIcon"/>
                <span className="sidebarIconName">Feeds</span>
            </li>
            <li className="sidebarListItem">
                <Chat className="sidebarIcon"/>
                <span className="sidebarIconName">Chats</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon"/>
                <span className="sidebarIconName">Videos</span>
            </li>
            <li className="sidebarListItem">
                <Group className="sidebarIcon"/>
                <span className="sidebarIconName">Groups</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark className="sidebarIcon"/>
                <span className="sidebarIconName">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon"/>
                <span className="sidebarIconName">Questions</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon"/>
                <span className="sidebarIconName">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon"/>
                <span className="sidebarIconName">Events</span>
            </li>
            <li className="sidebarListItem">
                <Event className="sidebarIcon"/>
                <span className="sidebarIconName">Courses</span>
            </li>
            <li className="sidebarListItem">
                <School className="sidebarIcon"/>
                <span className="sidebarIconName">School</span>
            </li>
        </ul>
        <button className="sidebarBtn">Show more</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="not found"/>
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="not found"/>
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="not found"/>
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="not found"/>
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
