import React, { useEffect, useState } from "react";
import Posts from "../blog/PostsView"
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://gastro-mombasa.herokuapp.com/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, [posts]);
  return (
    <>
      <head>
        <title>Dr. Firoz's Blog</title>
      </head>
      <div className="home" style={{paddingTop: 30}}>
        <Posts posts={posts} />
      </div>
    </>
  );
}