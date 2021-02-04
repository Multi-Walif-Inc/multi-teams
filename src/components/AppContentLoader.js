import React, { Component } from 'react'
import MainApp from './MainApp'
import LandingPage from './LandingPage'

/* This component is mostly only responsible for displaying the splash screen on load and then load the main app contents or login page. 
It can be temporary dis-rendered in development phase and re-rendered due production. It took me some time to make it work!

But, to disable it temporary, render the <main/> app component instead of <AppContentLoader/> directly in App.js and reverse this on production otherwise!
*/

// ahh, let's first leave it un used for now!

export default class AppContentLoader extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 6000)
    }

  render() {
    return (
      <>
      {
        this.state.isLoading ?
        <LandingPage /> :
        <MainApp/>
      }
      </>
    )
  }
}
