import React from 'react';

const EducationView = (props) => {
	return (
		<div className='education-view-container'>
			{props.arrayData?.map((education) => {
				return (
					<div key={education.id} className='education-info-container'>
						<button
							className='edit-button'
							onClick={() => props.edit(education.id, 'education')}
						>
							Edit
						</button>
						<button
							className='remove-button'
							onClick={() => props.remove(education.id, 'education')}
						></button>
						Delete
						<div className='education-info'>
							<p className='school'>{education.school}</p>
							<p className='degree'>{education.degree}</p>
							<p className='education-description'>
								{education.degreeDescription}
							</p>
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
};

export default EducationView;
