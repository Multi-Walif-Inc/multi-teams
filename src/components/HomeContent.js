import React, { Component } from 'react'
import Clock from './Clock'
import {BsCircleFill} from 'react-icons/bs'
import {BiPlayCircle} from 'react-icons/bi'
import dp1 from '../assets/dp1.png'
import dp2 from '../assets/dp2.png'
import meet from '../assets/meet.png'
import projectCover from '../assets/project-bg.jpg'
import projectLogo from '../assets/multi-v3.png'

export default class HomeContent extends Component {
  constructor() {
    super()
    this.state = {
      Now: "Getting time.."
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        Now: <Clock/>
      })
    }, 1000)
    }

  render() {
    const userName = 'Hussein';
    const userTime = this.state.Now

    return (
      <>
        <div className='home-container'>

          <div className='home-header'>

            <span className='home-header-left'>
              <h2>Hello {userName}</h2>
            </span>

            <span className='home-header-right'>
            <h2>{userTime}</h2>
            </span>

          </div>

          <div className='home-title'>Welcome back, here are your quick reminders!</div>

          <div className='home-content'>

          <div className='reminders-div'>
          <div className='home-reminder'>

            <div className='reminder-title'>
              <span><BsCircleFill className='reminder-title-icon'/></span>
              <span>In Chats</span>
            </div>

            <div className='reminder-body'>
              <div className='reminder-media'>

                <span>
                  <img
                  alt = 'user x'
                  src = {dp1}
                  className = 'dp1'
                  />
                </span>

                <span>
                <img
                  alt = 'user y'
                  src = {dp2}
                  className = 'dp2'
                  />
                </span>

              </div>

              <div className='reminder-text'>
              You last talked to <span>Jeri</span> and <span>Ashley</span>.
              </div>

            </div>

          </div>

          <div className='home-reminder'>

            <div className='reminder-title'>
              <span><BsCircleFill className='reminder-title-icon second'/></span>
              <span>In Meetings</span>
            </div>

            <div className='reminder-body'>
              <div className='reminder-media'>

                <span>
                <img
                  alt = 'user z'
                  src = {meet}
                  className = 'meeting-image'
                  />
                </span>

                <span><BiPlayCircle className='reminder-icon'/></span>
              </div>

              <div className='reminder-text meeting'>You were in 
              <span>board of executives</span>meeting on 01-Jan-2021</div>
            </div>
          </div>

          <div className='home-reminder'>

            <div className='reminder-title'>
              <span><BsCircleFill className='reminder-title-icon third'/></span>
              <span>In Projects</span>
            </div>

            <div className='reminder-body'>
              <div className='reminder-media projects'>

                <span>
                <img
                  alt = 'project cover'
                  src = {projectCover}
                  className = 'project-cover'
                  />
                </span>

                <span>
                <img
                  alt = 'project 1'
                  src = {projectLogo}
                  className = 'project-logo'
                  />
                </span>

              </div>

              <div className='reminder-text projects'>You were working on <span>Multi Teams Project</span>, on real time chat feature!</div>
              
            </div>
          </div>
          </div>
          </div>
        </div>
      </>
    )
  }
}
