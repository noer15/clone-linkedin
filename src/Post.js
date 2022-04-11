import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import { Comment, Send, Share, ThumbUp } from "@material-ui/icons";

import "./Post.css";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUp} title="Like" color="#666666" />
        <InputOption Icon={Comment} title="Comment" color="#666666" />
        <InputOption Icon={Share} title="Share" color="#666666" />
        <InputOption Icon={Send} title="Send" color="#666666" />
      </div>
    </div>
  );
});

export default Post;
