import React from 'react';

const EducationView = ({arrayData, edit, remove}) => {
	return (
		<div className='education-view-container'>
			{arrayData?.map((education) => {
				return (
					<div key={education.id} className='education-info-container'>
						<button
							className='edit-button'
							onClick={() => edit(education.id, 'education')}
						>
							Edit
						</button>
						<button
							className='remove-button'
							onClick={() => remove(education.id, 'education')}
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
