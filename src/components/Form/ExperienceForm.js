import React from 'react';
import Input from './Input';

const ExperienceForm = (props) => {
	const { handleInput } = props;
	const { company, position, workDescription, workStartDate, workEndDate } =
		props.value;
	return (
		<div className='experience-container'>
			<Input
				label={'Company Name'}
				type='text'
				value={company}
				handleInput={handleInput}
				name='company'
			/>
			<Input
				label={'Position'}
				type='text'
				value={position}
				handleInput={handleInput}
				name='position'
			/>
			<Input
				label={'Description'}
				inputType='textarea'
				type='text'
				value={workDescription}
				handleInput={handleInput}
				name='workDescription'
			/>
			<Input
				label={'Start Date'}
				type='date'
				value={workStartDate}
				handleInput={handleInput}
				name='workStartDate'
			/>
			<Input
				label={'End Date'}
				type='date'
				value={workEndDate}
				handleInput={handleInput}
				name='workEndDate'
			/>
			<button className='submit-button'>Submit</button>
		</div>
	);
};

export default ExperienceForm;
