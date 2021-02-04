import React, { Component } from 'react'
import SideBar from './SideBar'
import Main from './Main'

export default class MainApp extends Component {
  render() {
    return (
      <>
        <div className='main-wrapper'>

          <section className='sidebar-container'>
            <SideBar/>
          </section>

          <main className='main-container'>
            <Main/>
          </main>
          
        </div>
      </>
    )
  }
}
