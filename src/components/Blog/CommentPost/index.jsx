import React from 'react';
import { Avatar } from '@material-ui/core';
import './styles.css';
// import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
// import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import { useState } from "react";
const CommentPost = (props) => {
	// const [isliked, setIsliked] = useState(false);
	// const [isdisliked, setdisliked] = useState(false);

	// function handleLike() {
	//   setdisliked(false);
	//   setIsliked((prevValue) => {
	//     return !prevValue;
	//   });
	// }

	// function handledisliked() {
	//   setIsliked(false);
	//   setdisliked((prevValue) => {
	//     return !prevValue;
	//   });
	// }

	return (
		<div className="commentPost">
			<div className="top">
				<Avatar src={props.image} />
				<div>
					<h5>{props.name}</h5>
					<p>{props.body}</p>
					{/* <div className="icons">
            {isliked ? (
              <ThumbUpAltIcon onClick={handleLike} className="like" />
            ) : (
              <ThumbUpAltOutlinedIcon onClick={handleLike} className="like" />
            )}
            {isdisliked ? (
              <ThumbDownIcon onClick={handledisliked} className="dislike" />
            ) : (
              <ThumbDownAltOutlinedIcon
                onClick={handledisliked}
                className="dislike"
              />
            )}
          </div> */}
				</div>
			</div>
		</div>
	);
};

export default CommentPost;
