import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./widgets.css";
import CircleIcon from "@mui/icons-material/Circle";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <CircleIcon className="bullet"/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("All eyes on AI at Big Four", "1d ago")}
      {newsArticle("IT deals on recovery path", "4h ago")}
      {newsArticle("EV startups on hiring mode", "18h ago")}
      {newsArticle("Mustang gt is for sale", "2d ago")}
      {newsArticle("Tesla hit new High", "5h ago")}
    </div>
  );
}

export default Widgets;
