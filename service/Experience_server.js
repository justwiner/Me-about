let Experience_server = ( () => {
  const Experiences = require('../db/mongoose-db').Experiences
  class Experience_server {
    static async getExperiences () {
      return await Experiences.find()
    }
  }
  return Experience_server
} )()

exports = module.exports = Experience_server