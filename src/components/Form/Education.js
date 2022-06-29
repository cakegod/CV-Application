import React, { Component } from 'react';
import Input from './Input';

export default class Education extends Component {
	render() {
		const { handleInput, value } = this.props;
		return (
			<div className='education-container'>
				<Input
					type='text'
					value={value.school}
					label={'School Name'}
					handleInput={handleInput}
					name='school'
				/>
				<Input
					type='text'
					value={value.degree}
					label={'Degree'}
					handleInput={handleInput}
					name='degree'
				/>
				<Input
					type='text'
					value={value.degreeDescription}
					label={'Description'}
					handleInput={handleInput}
					name='degreeDescription'
				/>
				<Input
					type='date'
					value={value.degreeStartDate}
					label={'Start Date'}
					handleInput={handleInput}
					name='degreeStartDate'
				/>
				<Input
					type='date'
					value={value.degreeEndDate}
					label={'End Date'}
					handleInput={handleInput}
					name='degreeEndDate'
				/>
			</div>
		);
	}
}
