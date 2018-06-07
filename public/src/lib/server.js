import axios from 'axios'
import Config from './config'
import {Icon} from 'antd'

class Server {
  static createServer (baseUrl = Config.url) {
    let baseServer = axios.create({
      baseURL: baseUrl
    })
    baseServer.defaults.timeout = 6000
    baseServer.interceptors.response.use(res => res, err => {
      if (err.code === 'ECONNABORTED' || !err.response) {
        notification.warning({
          key: 'network error',
          message: '很抱歉',
          description: '请检查您的网络是否正常..'
        });
      }
      return Promise.reject(error);
    })
    return baseServer
  }
  static getWorks () {
    return Server.createServer().get('/myWorks')
  }
  static getExperiences () {
    return Server.createServer().get('/myExperiences')
  }
}

export default Server