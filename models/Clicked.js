const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClickedSchema = new Schema({
  title: {
    type: String
  }
});

module.exports = Clicked = mongoose.model("clicked", ClickedSchema);
