import React, { Component } from 'react';
import Input from './Input';

const EducationForm = (props) => {
	const { handleInput } = props;
	const { school, degree, degreeDescription, degreeStartDate, degreeEndDate } =
		props.value;
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
};

export default EducationForm;
