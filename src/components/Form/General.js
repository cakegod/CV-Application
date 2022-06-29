import React, { Component } from 'react';
import Input from './Input';

export default class General extends Component {

	render() {
		const { handleInput, value } = this.props;
		return (
			<div className='general-container'>
				<Input
					type='text'
          value={value.firstName}
					label={'First Name'}
					handleInput={handleInput}
					name='firstName'
				/>
				<Input
					type='text'
          value={value.lastName}
					label={'Last Name'}
					handleInput={handleInput}
					name='lastName'
				/>
				<Input
					type='email'
          value={value.emailAddress}
					label={'Email Address'}
					handleInput={handleInput}
					name='emailAddress'
				/>
				<Input
					type='text'
          value={value.phoneNumber}
					label={'Phone Number'}
					handleInput={handleInput}
					name='phoneNumber'
				/>
			</div>
		);
	}
}
