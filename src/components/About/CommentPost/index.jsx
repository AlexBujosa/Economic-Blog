import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
const CommentPost = (props) => (
  <div className="commentPost">
    <div className="top">
      <Avatar />
      <div>
        <h5>{props.name}</h5>
        <p>{props.body}</p>
        <div className="icons">
          <ThumbUpAltOutlinedIcon Icon className="like" />
          <ThumbDownAltOutlinedIcon className="dislike" />
        </div>
      </div>
    </div>
  </div>
);

export default CommentPost;
