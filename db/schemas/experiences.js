const mongoose = require('mongoose')

let Experiences_Schmas = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  position: String,
  link: String
}, {
  versionKey: false
})

exports = module.exports = Experiences_Schmas