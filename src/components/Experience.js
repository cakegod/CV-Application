import React, { Component } from 'react'
import Input from './Input'

export default class Experience extends Component {
  render() {
    const {handleInput} = this.props
    return (
      <div className="experience-container">
        <Input label={"Company Name"} handleInput={handleInput} name="company" />
        <Input label={"Position"} handleInput={handleInput} name="position"/>
        <Input label={"Description"} handleInput={handleInput} name="description"/>
        <Input label={"Start Date"} handleInput={handleInput} name="startDate"/>
        <Input label={"End Date"} handleInput={handleInput} name="endDate"/>
      </div>
    )
  }
}
