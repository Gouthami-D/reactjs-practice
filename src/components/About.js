import React from 'react'
import UserClass from './UserClass'
import User from './User'

class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor")
  }
  render(){
    console.log("Parent Component  render")
  return (
    <div>
      <h1>About</h1>
      <User name={"gouthami"} email={"g@gmail.com"} designation={"Associate"}/>
      <UserClass name={"gouthami prasanna"} email={"g@gmail.com"} designation={"Associate"}/>
    </div>
  )
  }
}

export default About
