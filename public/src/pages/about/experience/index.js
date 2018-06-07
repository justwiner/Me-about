import React, {Component} from 'react'
import { Icon } from 'antd'
import { Server } from '../../../lib'
import './index.scss'

class Experience extends Component {
  constructor (props) {
    super(props)
    this.state = {
      experiences: []
    }
  }
  async componentDidMount () {
    const result = await Server.getExperiences()
    this.setState({
      experiences: result.data
    })
  }
  toMyExperience = link => {
    window.open(link)
  }
  render () {
    const { experiences } = this.state
    return (
      <section className="experience-section color-section section">
        <div className="section-left animation-section">
          <div className="title experience-title">
            <h1>Experience</h1>
            <Icon type="file-text" />
          </div>
        </div>
        <div className="section-right animation-section">
          {
            experiences.map((item, index) => {
              return (
                <div className="experience-item" key={index}>
                  <div>
                    <h2>{item.name}</h2>
                    <Icon onClick={this.toMyExperience.bind(this, item.link)} type="export" />
                  </div>
                  <div className="time">{`${item.startTime} - ${item.endTime}`}</div>
                  <div className="position">{item.position}</div>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Experience