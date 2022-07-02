import React from 'react';

const ExperienceViewer = (props) => {
	return (
		<div className='experience-view-container'>
			{props.arrayData?.map((experience) => {
				return (
					<div key={experience.id} className='work-info-container'>
						<button
							className='edit-button'
							onClick={() => props.edit(experience.id, 'experience')}
						>
							Edit
						</button>
						<button
							className='remove-button'
							onClick={() => props.remove(experience.id, 'experience')}
						>
							Delete
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
};

export default ExperienceViewer;
