require('./connect')
const Works_schmas = require('./schemas/works')
const Experiences_Schmas = require('./schemas/experiences')
const mongoose = require('mongoose')

const Works = mongoose.model('work', Works_schmas)
const Experiences = mongoose.model('experience', Experiences_Schmas)

exports.Works = Works
exports.Experiences = Experiences