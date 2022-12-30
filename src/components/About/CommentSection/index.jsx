import React, { useState } from "react";
import CommentBox from "../CommentBox";
import CommentPost from "../CommentPost";
import "./styles.css";

// const comments = [
//   {
//     id: 1,
//     name: "Juan Perez",
//     body: "Me gusto mucho el articulo",
//   },
//   {
//     id: 2,
//     name: "Ismael Dicent",
//     body: "Me gusto mucho el articulo",
//   },
//   {
//     id: 3,
//     name: "Alex Bujosa",
//     body: "Eh mentiraaa",
//   },
//   {
//     id: 4,
//     name: "Sahira Tejada",
//     body: "Uhmm esta interesante",
//   },
// ];

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  function addComment(com) {
    setComments((prevValue) => {
      return [...prevValue, com];
    });
  }
  return (
    <div className="comments">
      <CommentBox onAdd={addComment} />
      {comments.map((comment, index) => {
        return <CommentPost key={index} name="Ismael" body={comment} />;
      })}
    </div>
  );
};

export default CommentSection;
