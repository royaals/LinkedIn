import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";

import { selectUser } from "./features/userSlice";
import {  useSelector } from "react-redux";
function HeaderOption({ avatar, Icon, title, onclick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onclick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
      <h5 className="headerOption__title">{title}</h5>
    </div>
  );
}

export default HeaderOption;
