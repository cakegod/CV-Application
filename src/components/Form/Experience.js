import React, { Component } from 'react';
import Input from './Input';

export default class Experience extends Component {
	render() {
		const { handleInput, value } = this.props;
		return (
			<div className='experience-container'>
				<Input
					type='text'
					value={value.company}
					label={'Company Name'}
					handleInput={handleInput}
					name='company'
				/>
				<Input
					type='text'
					value={value.position}
					label={'Position'}
					handleInput={handleInput}
					name='position'
				/>
				<Input
					type='text'
					value={value.workDescription}
					label={'Description'}
					handleInput={handleInput}
					name='workDescription'
				/>
				<Input
					type='date'
					value={value.workStartDate}
					label={'Start Date'}
					handleInput={handleInput}
					name='workStartDate'
				/>
				<Input
					type='date'
					label={'End Date'}
					value={value.workEndDate}
					handleInput={handleInput}
					name='workEndDate'
				/>
			</div>
		);
	}
}
