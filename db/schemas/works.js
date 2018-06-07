const mongoose = require('mongoose')

let Works_schmas = new mongoose.Schema({
  img: String,
  title: String,
  link: String,
  tags: Array
}, {
  versionKey: false
})

exports = module.exports = Works_schmas