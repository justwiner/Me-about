import React, { Component } from 'react'
import {Icon, Progress} from 'antd'
import './index.scss'

class Skills extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: []
    }
  }
  componentDidMount () {
    this.setState({
      skills: [
        {
          id: 1,
          name: 'CSS',
          percent: 75
        },
        {
          id: 2,
          name: 'JavaScript',
          percent: 80
        },
        {
          id: 3,
          name: 'Html',
          percent: 75
        },
        {
          id: 4,
          name: 'React.js',
          percent: 70
        },
        {
          id: 5,
          name: 'Vue.js',
          percent: 70
        },
        {
          id: 6,
          name: 'Node.js',
          percent: 60
        }
      ]
    })
  }
  render () {
    const { skills } = this.state
    return (
      <section className="section">
        <div className="section-left">
          <div className="title no-color-title">
            <h1>Skills</h1>
            <Icon type="user" />
          </div>
        </div>
        <div className="section-right skills-items">
          
          {
            skills.map((item, index) => {
              return (
                <div className="skills-item" key={index}>
                  <p>{item.name}</p>
                  <Progress percent={item.percent} status="active" showInfo={false} />
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Skills