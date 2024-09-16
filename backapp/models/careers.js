const express = require("express");
const mongoose = require("mongoose");

const careerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  qualification: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
  },
});

const Career = mongoose.model("career", careerSchema);

module.exports = Career;
