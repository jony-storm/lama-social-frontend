import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileLeft">
          <Sidebar />
        </div>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/6.jpeg" className="profileCoverImg"/>
              <img
                src="assets/person/6.jpeg"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
                <h2 className="profileUserName">Safak Kocaglue</h2>
                <span className="profileDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
