import React, { Component } from 'react'
import Input from './Input'

export default class General extends Component {
 
  render() {
    const  {handleInput} = this.props
    return (
      <div className="general-container">
        <Input label={"First Name"} handleInput={handleInput} name="firstName" />
        <Input label={"Last Name"}handleInput={handleInput} name="lastName"/>
        <Input label={"Email Address"}handleInput={handleInput} name="emailAddress"/>
        <Input label={"Phone Number"}handleInput={handleInput} name="phoneNumber"/>
      </div>
    )
  }
}
