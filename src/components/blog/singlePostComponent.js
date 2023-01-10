import axios from "axios";
import React, {useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePostComponent () {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [post, setPost] = useState({});
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const isLoggedIn = localStorage.getItem("name")

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://gastromombasa-server.onrender.com/api/posts/" + path);
      if(res) {
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setUsername(res.data.username)
      }
      else {
        console.log("loading...")
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://gastromombasa-server.onrender.com/api/posts/${post._id}`, {
        data: { username: username },
      });
      window.location.replace("/blog/posts");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://gastromombasa-server.onrender.com/api/posts/${post._id}`, {
        username,
        title,
        desc,
      });
      setUpdateMode(false)
      console.log(desc)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {updateMode ? (
          <input
            style={{display: "flex", alignItems: "center"}}
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
              {isLoggedIn ? ( <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>) : (<div />)}
              
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
              <b> {post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ width: "400px", height: "400px"}}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

