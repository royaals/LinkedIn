
import React from "react";
import "./sidebar.css";
import Avatar from "@mui/material/Avatar";
import {useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user=useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span> 
        <p>{topic}</p>
      </div>
    );
  }

  return (
    <div className="sidebar">

      <div className="sidebar__top">
        
        <Avatar src={user.photoUrl}className="sidebar__avatar" >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Profile viewers</p>
            <p className="sidebar__statNumber">3500</p>
          </div>
          <div className="sidebar__stat">
            <p>Post impressions</p> 
            <p className="sidebar__statNumber">5800</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")} 
        {recentItem("Redux")}  
        {recentItem("Firebase")} 
        {recentItem("Programming")}   
        {recentItem("Developer")}  
      </div>

    </div>
  );
}

export default Sidebar;