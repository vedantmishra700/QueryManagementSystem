const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = 8000;
const userRouter = require("./routes/userRoute");
const queryRouter = require("./routes/queryRoute");
const adRouter = require("./routes/adRoute");
const careerRouter = require("./routes/careerRoute");
const contactRouter = require("./routes/contactRoute");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/karam")
  .then(() => {
    console.log("Connection Done👍");
  })
  .catch((err) => {
    console.log("Error Found 😒", err);
  });

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(careerRouter);
app.use(contactRouter);
app.use(queryRouter);
app.use(adRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server Started on ${port} port`);
});
