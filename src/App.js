import React, { useState } from 'react';
import EducationForm from './components/Form/EducationForm';
import ExperienceForm from './components/Form/ExperienceForm';
import GeneralForm from './components/Form/GeneralForm';
import EducationView from './components/Viewer/EducationView';
import GeneralViewer from './components/Viewer/GeneralViewer';
import ExperienceViewer from './components/Viewer/ExperienceViewer';
import './styles/app.css';
import uniqid from 'uniqid';

const App = () => {
	const [general, setGeneral] = useState({
		firstName: '',
		lastName: '',
		address: '',
		emailAddress: '',
		phoneNumber: '',
	});

	const [experience, setExperience] = useState({
		company: '',
		position: '',
		workDescription: '',
		workStartDate: '',
		workEndDate: '',
		id: uniqid(),
	});

	const [education, setEducation] = useState({
		school: '',
		degree: '',
		degreeDescription: '',
		degreeStartDate: '',
		degreeEndDate: '',
		id: uniqid(),
	});

	const [experienceArray, setExperienceArray] = useState([]);
	const [educationArray, setEducationArray] = useState([]);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleInputValue = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case 'firstName':
			case 'lastName':
			case 'address':
			case 'emailAddress':
			case 'phoneNumber':
				setGeneral({
					...general,
					[name]: value,
				});
				break;
			case 'company':
			case 'position':
			case 'workDescription':
			case 'workStartDate':
			case 'workEndDate':
				setExperience({
					...experience,
					[name]: value,
					id: experience.id,
				});
				break;
			case 'school':
			case 'degree':
			case 'degreeDescription':
			case 'degreeStartDate':
			case 'degreeEndDate':
				setEducation({
					...education,
					[name]: value,
					id: education.id,
				});
				break;
			default:
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case 'experience':
				if (!isEditMode) {
					setExperienceArray(experienceArray.concat(experience));
				} else {
					const index = experienceArray.findIndex(
						(item) => item.id === experience.id,
					);
					experienceArray.splice(index, 1, experience);
					setIsEditMode(false);
				}
				setExperience({
					company: '',
					position: '',
					workDescription: '',
					workStartDate: '',
					workEndDate: '',
					id: uniqid(),
				});
				break;
			case 'education':
				if (!isEditMode) {
					setEducationArray(educationArray.concat(education));
				} else {
					const index = educationArray.findIndex(
						(item) => item.id === education.id,
					);
					educationArray.splice(index, 1, education);
					setEducation(false);
				}
				setEducation({
					school: '',
					degree: '',
					degreeDescription: '',
					degreeStartDate: '',
					degreeEndDate: '',
					id: uniqid(),
				});
				break;
			default:
		}
	};

	const handleRemove = (id, section) => {
		if (section === 'experience') {
			const index = experienceArray.findIndex((item) => item.id === id);
			experienceArray.splice(index, 1);
			setExperienceArray(...experienceArray);
		} else if (section === 'education') {
			const index = educationArray.findIndex((item) => item.id === id);
			educationArray.splice(index, 1);
			setEducationArray(...educationArray);
		}
	};

	const handleEdit = (id, section) => {
		if (section === 'experience') {
			const index = experienceArray.findIndex((item) => item.id === id);
			setExperience(experienceArray[index]);
		} else if (section === 'education') {
			const index = educationArray.findIndex((item) => item.id === id);
			setEducation(educationArray[index]);
		}
		setIsEditMode(true);
	};

	return (
		<div className='container'>
			<div className='forms-container'>
				<form>
					<GeneralForm
						handleInput={handleInputValue}
						value={general}
					></GeneralForm>
				</form>
				<form onSubmit={handleSubmit} name='experience'>
					<ExperienceForm handleInput={handleInputValue} value={experience} />
				</form>
				<form onSubmit={handleSubmit} name='education'>
					<EducationForm handleInput={handleInputValue} value={education} />
				</form>
			</div>
			<div className='cv-viewer'>
				<GeneralViewer data={general} />
				<ExperienceViewer
					arrayData={experienceArray}
					edit={handleEdit}
					remove={handleRemove}
				/>
				<EducationView
					arrayData={educationArray}
					edit={handleEdit}
					remove={handleRemove}
				/>
			</div>
		</div>
	);
};

export default App;
