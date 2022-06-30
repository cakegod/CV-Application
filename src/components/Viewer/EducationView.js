import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		return (
			<div className='education-view-container'>
				{this.props.arrayData?.map((education) => {
					return (
						<div key={education.id} className='education-info-container'>
							<button
								className='edit-button'
								onClick={() => this.props.edit(education.id, "education")}
							>
								Edit
							</button>
							<div className='education-info'>
								<p className='school'>{education.company}</p>
								<p className='degree'>{education.degree}</p>
								<p className='education-description'>{education.degreeDescription}</p>
							</div>
							<div className='education-date'>
								<p>{education.degreeStartDate}</p>
								<p>{education.degreeEndDate}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
