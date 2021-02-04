import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal';
import Pattern from '../assets/linkedin-plus.svg'
import TeamsLogo from '../assets/multi-teams-logo-grad.svg'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className='top-div'>

          <img
          alt = ''
          src = {Pattern}
          className='bg-pattern faa-float faa-slow animated'/>

        </div>

        <div className='middle-div'>

        <Reveal effect="fadeInDown">

          <span>
            <img
            alt = 'multi teams logo'
            src = {TeamsLogo}
            className = 'teams-logo'
            />
          </span>

          <span>
            <h3 className='teams-name'>Multi Teams</h3>
            <h2 className='teams-tagline'>Empowering Local Developers Through Profitable Collaborations</h2>
          </span>

          </Reveal>

        </div>

        <div className='bottom-div'>

        <Reveal effect="fadeInUp">

        <div className='page-action'>
          <span>Login</span>
          <span>Join</span>
          </div>
          
          </Reveal>

        </div>
      </>
    )
  }
}
