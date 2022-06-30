import React, { Component } from 'react';
import Input from './Input';

export default class EducationForm extends Component {
	render() {
		const { handleInput } = this.props;
		const {
			school,
			degree,
			degreeDescription,
			degreeStartDate,
			degreeEndDate,
		} = this.props.value.education;
		return (
			<div className='education-container'>
				<Input
					label={'School Name'}
					type='text'
					value={school}
					handleInput={handleInput}
					name='school'
				/>
				<Input
					label={'Degree'}
					type='text'
					value={degree}
					handleInput={handleInput}
					name='degree'
				/>
				<Input
					label={'Description'}
					inputType='textarea'
					type='text'
					handleInput={handleInput}
					value={degreeDescription}
					name='degreeDescription'
				/>
				<Input
					label={'Start Date'}
					type='date'
					value={degreeStartDate}
					handleInput={handleInput}
					name='degreeStartDate'
				/>
				<Input
					label={'End Date'}
					type='date'
					value={degreeEndDate}
					handleInput={handleInput}
					name='degreeEndDate'
				/>
				<button className='submit-button'>Submit</button>
			</div>
		);
	}
}
