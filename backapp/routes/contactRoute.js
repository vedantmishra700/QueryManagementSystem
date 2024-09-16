const express = require("express");
const Contact = require("../models/contact");
const contactRoute = express.Router();

contactRoute.post("/contact", async (req, res) => {
  const abc = await Contact.create(req.body);
  return res.send({ msg: "Success" });
});

contactRoute.get("/contact", async (req, res) => {
  const result = await Contact.find();
  return res.send(result);
});

module.exports = contactRoute;
