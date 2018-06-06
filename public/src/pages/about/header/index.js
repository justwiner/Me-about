import React, {Component} from 'react'
import './index.scss'

class Head extends Component {
  render () {
    return (
      <section className="header-section color-section section">
        <section className="header-myName">
          <h2>
            <font>WINER</font>
            <strong>DESIGN</strong>
          </h2>
        </section>
        <section className="header-about">
          <h1>前端开发工程师</h1>
          <p>专注于构建从小型企业网站到丰富的交互式Web应用程序的所有内容。</p>
        </section>
      </section>
    )
  }
}

export default Head