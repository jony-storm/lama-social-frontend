import React from 'react';
import "./online.css";

function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={user.profilePicture}
                alt=""
                className="rightbarFriendImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">{user.username}</span>
          </li>
    </div>
  );
}

export default Online;
