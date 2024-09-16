const express = require("express");
const User = require("../models/user");
const userRoute = express.Router();

userRoute.post("/", async (req, res) => {
  const abc = await User.create(req.body);
  return res.send({ msg: "Success" });
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    if (user.password === password) {
      return res.send({ msg: "Login Success", id: user._id });
    } else {
      return res.send({ msg: "Inavlid Password" });
    }
  } else {
    return res.send({ msg: "User Not Exist" });
  }
});

userRoute.get("/", async (req, res) => {
  const result = await User.find();
  return res.send(result);
});
userRoute.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await User.findById(id);
  return res.send(result);
});

userRoute.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndUpdate(id, req.body);
    return res.send({ msg: "Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});
userRoute.patch("/editDash/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndUpdate(id, req.body);
    return res.send({ msg: "Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});

userRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    return res.send({ msg: "Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});

module.exports = userRoute;
