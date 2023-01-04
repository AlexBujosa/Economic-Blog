import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import "./styles.css";

const CommentBox = (props) => {
  const [comment, setcomment] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setcomment(value);
  }

  function handlesubmit(event) {
    event.preventDefault();
    props.onAdd(comment);
    setcomment("");
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="commentBox">
          <Avatar />
          <input
            value={comment}
            onChange={handleChange}
            placeholder="Add a comment..."
          />
        </div>
        <Button type="submit" onClick={handlesubmit}>
          Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentBox;
