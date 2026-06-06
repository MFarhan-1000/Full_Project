import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePosts() {
  const [title, settitle] = useState("");
  const [img, setimg] = useState();

  const [message, setmessage] = useState("");

  const [loading, setloading] = useState(false);
  const navigation = useNavigate();

  const user = localStorage.getItem("user");
  const user_parse = JSON.parse(user);
  const user_id = user_parse._id;

  const PostsUpload = async (e) => {
    e.preventDefault();
    setloading(true);
    const newform = new FormData();
    newform.append("media", img);

    
    // saving to database start here
    const saveImageUrl = async (url, filename, mimetype) => {
      let result = await fetch("http://localhost:3000/savemedia", {
        method: "POST",
        body: JSON.stringify({ title, user_id, url, filename, mimetype }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let savedData = await result.json();
      console.log(savedData);
    };

    if (img) {
      try {
        let result = await fetch("http://localhost:3000/createposts", {
          method: "POST",
          body: newform,
        });
        const data = await result.json();
        console.log(data);

        await saveImageUrl(data.path, data.originalname, data.mimetype);
        navigation("/home");
      } catch (err) {
        console.log(err);
      } finally {
        setloading(false);
      }
    }else{
      savepost();
    }

  };

  const savepost = async () => {
    let post_result = await fetch("http://localhost:3000/save_post", {
      method: "POST",
      body: JSON.stringify({ title, message, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message_data = await post_result.json();
    console.log(message_data);
    setloading(false);
    navigation("/home");
  };

  return (
    <div>
      <h1>Create Posts</h1>

      <form onSubmit={PostsUpload}>
        <label htmlFor="title">Enter Title Name</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          required
        />

        <br />
        <br />

        <label htmlFor="file">Upload File here</label>
        <input
          id="file"
          type="file"
          onChange={(e) => {
            setimg(e.target.files[0]);
          }}
          // required
        />

        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />

        <button type="submit"> {loading ? "Loading" : "Submit"}</button>
      </form>
    </div>
  );
}

export default CreatePosts;
