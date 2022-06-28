import React, { Component } from 'react';

export default class Input extends Component {
	render() {
    const {label, handleInput, name} = this.props

		return (
			<div>
				<label>{label}</label>
				<input type='text' onChange={handleInput} name={name} />
			</div>
		);
	}
}
