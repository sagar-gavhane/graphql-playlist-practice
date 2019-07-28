const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  name: String,
  genre: String,
  authorId: String
})

module.exports = mongoose.model("Books", schema)
