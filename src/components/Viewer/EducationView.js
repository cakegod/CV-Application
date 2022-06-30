import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const {
			school,
			degree,
			degreeDescription,
			degreeStartDate,
			degreeEndDate,
		} = this.props.data;
		return (
			<div className="education-view-container">
				<p>{school}</p>
				<p>{degree}</p>
				<p>{degreeDescription}</p>
				<p>{degreeStartDate}</p>
				<p>{degreeEndDate}</p>
			</div>
		);
	}
}
