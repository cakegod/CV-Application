import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		const { label, handleInput, name, type, value } = this.props;

		return (
			<div>
				<label className='label'>{label}</label>
				<input value={value} type={type} onChange={handleInput} name={name} />
			</div>
		);
	}
}
