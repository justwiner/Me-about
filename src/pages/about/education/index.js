import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

class Education extends Component {
  constructor (props) {
    super(props)
    this.state = {
      educations: []
    }
  }
  componentDidMount () {
    this.setState({
      educations: [
        {
          time: '2019（Expected）',
          info: '成为全栈开发工程师',
          in: '挖掘自我'
        },
        {
          time: '2016-6',
          info: '前端开发人员',
          in: '奇点创新实验室'
        },
        {
          time: "2015-9",
          info: '计算机科学与工程学院-软件工程专业',
          in: '重庆理工大学'
        }
      ]
    })
  }
  render () {
    const { educations } = this.state
    return (
      <section className="education-section color-section section">
        <div className="section-left">
          <div className="title experience-title">
            <h1>Education</h1>
            <Icon type="schedule" />
          </div>
        </div>
        <div className="section-right">
          {
            educations.map((item, index) => {
              return (
                <div className="educations-item" key={index}>
                  <div>{item.time}</div>
                  <h2>{item.info}</h2>
                  <p>{item.in}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Education