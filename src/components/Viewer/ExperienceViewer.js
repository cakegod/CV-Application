import React, { Component } from 'react';

export default class ExperienceViewer extends Component {
	render() {
		return (
			<div className='experience-view-container'>
				{this.props.arrayData?.map((experience) => {
					return (
						<div key={experience.id} className='work-info-container'>
							<button
								className='edit-button'
								onClick={() => this.props.edit(experience.id, "experience")}
							>
								Edit
							</button>
							<div className='work-info'>
								<p className='company'>{experience.company}</p>
								<p className='position'>{experience.position}</p>
								<p className='work-description'>{experience.workDescription}</p>
							</div>
							<div className='work-date'>
								<p>{experience.workStartDate}</p>
								<p>{experience.workEndDate}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
