import React from 'react';
const GeneralViewer = (props) => {
	const { firstName, lastName, address, phoneNumber, emailAddress } =
		props.data;
	return (
		<div className='general-view-container'>
			<p className='first-name'>{firstName}</p>
			<p className='last-name'>{lastName}</p>
			<p className='address'>{address}</p>
			<p className='phone-number'>{phoneNumber}</p>
			<p className='email-address'>{emailAddress}</p>
		</div>
	);
};

export default GeneralViewer;
