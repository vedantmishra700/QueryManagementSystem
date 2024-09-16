const express = require("express");
const User = require("../models/user");
const Query = require("../models/query");
const queryRoute = express.Router();

queryRoute.get("/getquery", async (req, res) => {
  const result = await Query.find();
  return res.send(result);
});
queryRoute.get("/getpenquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "pen" });
  res.send({ msg: "Success", result: result });
});
queryRoute.get("/getproquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "pro" });
  res.send({ msg: "Success", result: result });
});
queryRoute.get("/getcomquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "com" });
  res.send({ msg: "Success", result: result });
});
queryRoute.post("/addquery", async (req, res) => {
  const query = req.body;
  const result = Query.create(req.body);
  res.send({ msg: "Query Added" });
});
queryRoute.patch("/editQuery/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Query.findByIdAndUpdate(id, req.body);
    return res.send({ msg: "Success", result: result });
  } catch (error) {
    return res.send({ msg: error });
  }
});
queryRoute.delete("/delquery/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Query.findByIdAndDelete(id);
    return res.send({ msg: "Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});

module.exports = queryRoute;
