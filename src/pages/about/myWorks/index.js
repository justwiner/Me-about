import React, { Component } from 'react'
import {Icon} from 'antd'
import './index.scss'

class MyWorks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      works: []
    }
  }
  componentDidMount () {
    this.setState({
      works: [
        {
          id: 1,
          img: 'http://jessdesigntan.com/images/styletribute.jpg',
          link: 'https://www.baidu.com',
          title: 'Styletrbute.com-1',
          tags: ['html', 'js', 'css']
        },
        {
          id: 2,
          img: 'http://jessdesigntan.com/images/dearcarrie.jpg',
          link: 'https://www.baidu.com',
          title: 'Styletrbute.com-2',
          tags: ['html', 'js', 'css']
        },
        {
          id: 3,
          img: 'http://jessdesigntan.com/images/nickel.jpg',
          link: 'https://www.baidu.com',
          title: 'Styletrbute.com-3',
          tags: ['html', 'js']
        },
        {
          id: 4,
          img: 'http://jessdesigntan.com/images/sqrl.jpg',
          link: 'https://www.baidu.com',
          title: 'Styletrbute.com-4',
          tags: ['html', 'js', 'css', 'react']
        }
      ]
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