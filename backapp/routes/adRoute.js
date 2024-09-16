const express = require("express");
const User = require("../models/user");
const Query = require("../models/query");
const Admin = require("../models/admin");
const adRoute = express.Router();

adRoute.post("/adlogin", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await Admin.findOne({ email });
  if (user) {
    if (user.password === password) {
      return res.send({ msg: "Admin Login Success" });
    } else {
      return res.send({ msg: "Invalid Password" });
    }
  } else {
    return res.send({ msg: "Not Admin" });
  }
});

adRoute.get("/ad/allpenquery", async (req, res) => {
  const query = await Query.find({ status: "pen" });
  return res.send({ msg: "Success", q: query });
});

adRoute.get("/ad/allproquery", async (req, res) => {
  const query = await Query.find({ status: "pro" });
  return res.send({ msg: "Success", q: query });
});

adRoute.get("/ad/allcomquery", async (req, res) => {
  const query = await Query.find({ status: "com" });
  return res.send({ msg: "Success", q: query });
});

adRoute.patch("/status/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Query.findByIdAndUpdate(id, req.body);
    return res.send({ msg: "Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});

module.exports = adRoute;
