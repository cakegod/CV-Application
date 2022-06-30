import React, { Component } from 'react';
import Input from './Input';

export default class GeneralForm extends Component {
	render() {
		const { handleInput } = this.props;
		const { firstName, lastName, address, emailAddress, phoneNumber } =
			this.props.value.general;
		return (
			<div className='general-container'>
				<Input
					label={'First Name'}
					type='text'
					value={firstName}
					handleInput={handleInput}
					name='firstName'
				/>
				<Input
					label={'Last Name'}
					type='text'
					value={lastName}
					handleInput={handleInput}
					name='lastName'
				/>
				<Input
					label={'Address'}
					type='text'
					value={address}
					handleInput={handleInput}
					name='address'
				/>
				<Input
					label={'Email Address'}
					type='email'
					value={emailAddress}
					handleInput={handleInput}
					name='emailAddress'
				/>
				<Input
					label={'Phone Number'}
					type='text'
					value={phoneNumber}
					handleInput={handleInput}
					name='phoneNumber'
				/>
			</div>
		);
	}
}
