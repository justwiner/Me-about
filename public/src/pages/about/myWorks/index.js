import React, { Component } from 'react'
import {Icon} from 'antd'
import { Server } from '../../../lib'
import './index.scss'

class MyWorks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      works: []
    }
  }
  async componentDidMount () {
    const result = await Server.getWorks()
    this.setState({
      works: result.data
    })
  }
  render() {
    const { works } = this.state
    return (
      <section className="section">
        <div className="section-left animation-section">
          <div className="title no-color-title">
            <h1>Works</h1>
            <Icon type="schedule" />
          </div>
        </div>
        <div className="section-right animation-section">
          {
            works.map((item, index) => {
              return (
                <div className="works-item" key={index}>
                  <a target="blank" className="works-item-img" href={item.link}>
                    <img src={item.img} />
                  </a>
                  <a target="blank" className="works-item-title" href={item.link}>
                    <h2>{item.title}</h2>
                  </a>
                  <div className="tags">
                    {
                      item.tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default MyWorks