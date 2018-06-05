import React, { Component } from 'react'
import Head from './header'
import AboutMe from './aboutMe'
import Experience from './experience'
import Skills from './skills'
import Education from './education'
import MyWorks from './myWorks'
import './index.scss'

class About extends Component {
  render () {
    return (
      <content>
        <Head />
        <AboutMe />
        <Experience />
        <Skills />
        <Education />
        <MyWorks />
      </content>
    )
  }
}

export default About