import React, { Component } from 'react';

export default class GeneralViewer extends Component {
	render() {

    const {firstName, lastName, address , phoneNumber, emailAddress} = this.props.data
		return (
			<div className="general-view-container">
				<p className="first-name">{firstName}</p>
				<p className="last-name">{lastName}</p>
				<p className="address">{address}</p>
				<p className="phone-number">{phoneNumber}</p>
				<p className="email-address">{emailAddress}</p>
			</div>
		);
	}
}
