import React, { Component } from 'react'
import {Icon} from 'antd'
import './index.scss'

class Footer extends Component {
  render () {
    return (
      <section className="section line-section">
        <div className="footer-section">
          <font className="footer-title">
            <font>WINER</font>
            <strong>DESIGN</strong>
          </font>
          <div className="footer-copyright">
            <font><Icon type="copyright" />2018</font>
            <font>luyuwen.cn</font>
            <font>渝ICP备18005473号</font>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer