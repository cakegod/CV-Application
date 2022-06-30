import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		const { label, handleInput, name, type, value } = this.props;

		if (this.props.inputType === 'textarea') {
			return (
				<div>
					<label className='label'>{label}</label>
					<textarea
						value={value}
						type={type}
						onChange={handleInput}
						name={name}
						required
					/>
				</div>
			);
		} else {
			return (
				<div>
					<label className='label'>{label}</label>
					<input
						value={value}
						type={type}
						onChange={handleInput}
						name={name}
						required
					/>
				</div>
			);
		}
	}
}
