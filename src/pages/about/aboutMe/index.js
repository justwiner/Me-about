import React, { Component } from 'react'
import {Icon} from 'antd'
import './index.scss'

class AboutMe extends Component {
  render () {
    return (
      <section className="section">
        <div className="section-left">
          <div className="title no-color-title">
            <h1>About</h1>
            <Icon type="user" />
          </div>
        </div>
        <div className="section-right">
          <h2>Winer</h2>
          <p>我使用JavaScript、CSS、NodeJS开发网站，并且将它们部署到服务器上，喜欢编写可扩展、可重用、高性能的web组件或是网页。</p>
          <p>编写符合标准语义、可阅读的代码也是必不可少的技能。</p>
        </div>
      </section>
    )
  }
}

export default AboutMe