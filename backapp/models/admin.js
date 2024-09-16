const express = require("express");
const mongoose = require("mongoose");

const adSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
  },
});

const Admin = mongoose.model("admin", adSchema);

module.exports = Admin;
