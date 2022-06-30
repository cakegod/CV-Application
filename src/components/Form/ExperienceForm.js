import React, { Component } from 'react';
import Input from './Input';

export default class ExperienceForm extends Component {
	render() {
		const { handleInput } = this.props;
		const { company, position, workDescription, workStartDate, workEndDate } =
			this.props.value.experience;
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
	}
}
