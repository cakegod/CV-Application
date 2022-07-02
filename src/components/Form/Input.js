import React from 'react';

const Input = ({ label, handleInput, name, type, value, inputType }) => {
	if (inputType === 'textarea') {
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
};

export default Input;
