import React, { Component } from 'react'
import {Icon, Tooltip } from 'antd'
import './index.scss'

class Contact extends Component {
  render () {
    return (
      <section className="section line-section">
        <div className="section-left animation-section">
          <div className="title no-color-title">
            <h1>Cpntact</h1>
            <Icon type="message" />
          </div>
        </div>
        <div className="section-right animation-section">
          <h2 className="myEmail">392110917@qq.com</h2>
          <div className="other-info">
            <label>友情链接：</label>
            <Tooltip title="github 地址">
              <a href="https://github.com/justwiner" target="blank"><Icon type="github" /></a>
            </Tooltip>
            <Tooltip title="博客地址">
              <a href="https://segmentfault.com/u/winer_5ad36a96049db/articles" target="blank"><Icon type="exception" /></a>
            </Tooltip>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact