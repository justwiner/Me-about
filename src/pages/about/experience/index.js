import React, {Component} from 'react'
import { Icon } from 'antd'
import './index.scss'

class Experience extends Component {
  constructor (props) {
    super(props)
    this.state = {
      experiences: []
    }
  }
  componentDidMount () {
    this.setState({
      experiences: [
        {
          id: 1,
          name: '学生活App',
          startTime: '2016-7-1',
          endTime: '2016-8-1',
          position: '前端开发工程师',
          link: 'https://www.baidu.com'
        },
        {
          id: 2,
          name: '学生活App 2',
          startTime: '2016-7-1',
          endTime: '2016-8-1',
          position: '前端开发工程师',
          link: 'https://www.baidu.com'
        },
        {
          id: 3,
          name: '学生活App 3',
          startTime: '2016-7-1',
          endTime: '2016-8-1',
          position: '前端开发工程师',
          link: 'https://www.baidu.com'
        },
        {
          id: 4,
          name: '学生活App 4',
          startTime: '2016-7-1',
          endTime: '2016-8-1',
          position: '前端开发工程师',
          link: 'https://www.baidu.com'
        }
      ]
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