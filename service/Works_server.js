let Works_server = ( () => {
  const Works = require('../db/mongoose-db').Works
  class Works_server {
    static async getWorks () {
      const result = await Works.find()
      return result
    }
  }
  return Works_server
} )()

exports = module.exports = Works_server