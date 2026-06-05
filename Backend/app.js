const express = require("express");
const app = express();

const port = 3000;
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const main = require("./Config/DB");
main();

const { upload } = require("./Config/Cloudinary");

// Database import here
const User = require("./Model/User");
const Post = require("./Model/Post");

//singup page
app.post("/signup", async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      return res.status(401).send("User with email Already exists");
    } else {
      const addUser = { name, age, email, password };
      const saveUser = new User(addUser);
      const result = await saveUser.save();
      res.send(result);
    }
  } catch {
    res.status(500).send("server Error");
  }
});

// Login page setting
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const check = await User.findOne({ email });
    if (check) {
      const checkPassword = await User.findOne({
        email: email,
        password: password,
      });
      if (checkPassword) {
        const result = checkPassword;
        res.send(result);
      } else {
        res.status(401).send("Please check your password");
      }
    } else {
      res.status(404).send("No Email Found");
    }
  } else {
    res.status(404).send("No Data Found");
  }
});

// Creating a post
app.post("/createposts", upload.single("media"), (req, res) => {
  res.send(req.file);
});

// saving image details in database
app.post("/savemedia", async (req, res) => {
  try {
    const { title, user_id, url, filename, mimetype } = req.body;
    if (url && user_id) {
      const post = new Post({
        title: title,
        user_id: user_id,
        media: {
          url: url,
          filename: filename,
          mimetype: mimetype,
        },
      });
      const save = await post.save();
      res.send(save);
    } else {
      res.status(400).send("Please Check Your Details");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// saving message detail in database
app.post("/save_post", async (req, res) => {
  try {
    const { title, message, user_id } = req.body;
    if (message && user_id) {
      const post_data = { title };
      const post = new Post({
        title: title,
        user_id: user_id,
        message: message,
      });
      const result = await post.save();
      res.send(result);
    } else {
      res.status(400).send("Please Check your message OR User_id");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// getting data for home page
app.get("/getdata", async (req, res) => {
  try {
    const data = await Post.find({});
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(400).send("NO data found");
    }
  } catch (err) {
    console.log(err);
    res.send(500).send("Server Error");
  }
});

// getting User data for update and delete
app.get("/userprofile/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const getdata = await Post.find({ "user_id": req.params.id });
    if (getdata) {
      console.log(getdata);
      const result = getdata;
      res.send(result);
    } else {
      res.status(404).send("No user data Found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Listen port
app.listen(port, () => {
  console.log(`Port is on ${port}`);
});
