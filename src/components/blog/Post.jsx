import "./post.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postInfo">
        <Link to={`${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}