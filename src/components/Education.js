import React, { Component } from 'react';
import Input from './Input'

export default class Education extends Component {
	render() {
		const {handleInput} = this.props
		return (
		<div className="education-container">
			  <Input label={"School Name"} handleInput={handleInput} name="school" />
        <Input label={"Degree"} handleInput={handleInput} name="degree"/>
        <Input label={"Description"} handleInput={handleInput} name="description"/>
        <Input label={"Start Date"} handleInput={handleInput} name="startDate"/>
        <Input label={"End Date"} handleInput={handleInput} name="endDate"/>
		</div>)
	}
}
