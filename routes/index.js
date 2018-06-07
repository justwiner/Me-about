const express = require('express')
const router = express.Router()
const works_server = require('../service/Works_server')
const experience_server = require('../service/Experience_server')

router.get('/myWorks',async (req, res, next) => {
  res.send(await works_server.getWorks())
})

router.get('/myExperiences',async (req, res, next) => {
  res.send(await experience_server.getExperiences())
})

exports = module.exports = router