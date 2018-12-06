const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const clicked = require("./routes/clicked");

// app.get("/", (req, res) => res.send("Hello YouTube"));

// configuring body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connecting MongoDB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MONGO CONNECTED"));

app.use("/api/clicked", clicked);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
