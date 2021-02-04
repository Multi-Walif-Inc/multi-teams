import React, { Component } from 'react'
import SideBarLogo from '../assets/multi-teams-logo-grad.svg'
import {BiUser,BiChat,BiVideo,BiCog,BiHome,BiFile} from 'react-icons/bi'

export default class SideBar extends Component {
  render() {
    return (
      <>
        <div className='sidebar-header'>
          <img
          alt = ''
          src = {SideBarLogo}
          className = 'sidebar-logo'
          />
        </div>
        <div className='sidebar-content'>

        <span>
          <BiHome className='sidebar-icon homie'/>
          </span>

          <span>
            <BiUser className='sidebar-icon'/>
          </span>

          <span>
          <BiChat className='sidebar-icon'/>
          </span>

          <span>
          <BiVideo className='sidebar-icon'/>
          </span>

          <span>
          <BiFile className='sidebar-icon'/>
          </span>

          <span>
          <BiCog className='sidebar-icon'/>
          </span>
          
        </div>
      </>
    )
  }
}
