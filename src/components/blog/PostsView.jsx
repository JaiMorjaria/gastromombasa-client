import Post from "../blog/Post";
import "./posts.css";
import React from 'react'

export default function Posts({ posts }) {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: '100wh', height: '100vh', paddingTop: "50px"}}>
      <h1>Dr. Firoz's Blog</h1>
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
}