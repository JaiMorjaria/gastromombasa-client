import "./writePost.css";
import React, {useState} from "react";
import axios from "axios";


export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const user = JSON.parse(localStorage.getItem("name"))

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user,
      title,
      desc,
    };
    try {
      const res = await axios.post("https://gastro-mombasa.herokuapp.com/api/posts/", newPost, config);
      window.location.replace("/blog/posts");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
 <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          </label>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}