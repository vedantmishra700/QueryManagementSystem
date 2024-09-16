const express = require("express");
const Career = require("../models/careers");
const careerRoute = express.Router();

careerRoute.post("/career", async (req, res) => {
  const abc = await Career.create(req.body);
  return res.send({ msg: "Success" });
});

careerRoute.get("/career", async (req, res) => {
  const result = await Career.find();
  return res.send(result);
});

module.exports = careerRoute;
