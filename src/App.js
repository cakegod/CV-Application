import React, { Component } from 'react';
import EducationForm from './components/Form/EducationForm';
import ExperienceForm from './components/Form/ExperienceForm';
import GeneralForm from './components/Form/GeneralForm';
import EducationView from './components/Viewer/EducationView';
import GeneralViewer from './components/Viewer/GeneralViewer';
import ExperienceViewer from './components/Viewer/ExperienceViewer';
import './styles/app.css';
import uniqid from 'uniqid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			general: {
				firstName: '',
				lastName: '',
				address: '',
				emailAddress: '',
				phoneNumber: '',
			},

			experience: {
				company: '',
				position: '',
				workDescription: '',
				workStartDate: '',
				workEndDate: '',
				id: uniqid(),
			},

			education: {
				school: '',
				degree: '',
				degreeDescription: '',
				degreeStartDate: '',
				degreeEndDate: '',
				id: uniqid(),
			},
			experienceArray: [],
			educationArray: [],
		};
	}

	handleInputValue = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case 'firstName':
			case 'lastName':
			case 'address':
			case 'emailAddress':
			case 'phoneNumber':
				this.setState({
					general: {
						...this.state.general,
						[name]: value,
					},
				});
				break;
			case 'company':
			case 'position':
			case 'workDescription':
			case 'workStartDate':
			case 'workEndDate':
				this.setState({
					experience: {
						...this.state.experience,
						[name]: value,
						id: this.state.experience.id,
					},
				});
				break;
			case 'school':
			case 'degree':
			case 'degreeDescription':
			case 'degreeStartDate':
			case 'degreeEndDate':
				this.setState({
					education: {
						...this.state.education,
						[name]: value,
						id: this.state.education.id,
					},
				});
				break;
			default:
		}
	};
	handleSubmit = (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case 'experience':
				this.setState({
					experienceArray: this.state.experienceArray.concat(
						this.state.experience,
					),
					experience: {
						company: '',
						position: '',
						workDescription: '',
						workStartDate: '',
						workEndDate: '',
						id: uniqid(),
					},
				});
				break;
			case 'education':
				this.setState({
					educationArray: this.state.educationArray.concat(
						this.state.education,
					),
					education: {
						school: '',
						degree: '',
						degreeDescription: '',
						degreeStartDate: '',
						degreeEndDate: '',
						id: uniqid(),
					},
				});
				break;
			default:
		}
	};

	render() {
		const { general, education, experience, experienceArray, educationArray } =
			this.state;
		return (
			<div className='container'>
				<div className='forms-container'>
					<form>
						<GeneralForm
							handleInput={this.handleInputValue}
							value={this.state}
						></GeneralForm>
					</form>
					<form onSubmit={this.handleSubmit} name='experience'>
						<ExperienceForm
							handleInput={this.handleInputValue}
							value={this.state}
						/>
					</form>
					<form onSubmit={this.handleSubmit} name='education'>
						<EducationForm
							handleInput={this.handleInputValue}
							value={this.state}
						/>
					</form>
				</div>
				<div className='cv-viewer'>
					<GeneralViewer data={general} />
					<ExperienceViewer data={experience} arrayData={experienceArray} />
					<EducationView data={education} arrayData={educationArray} />
				</div>
			</div>
		);
	}
}

export default App;

// You should use class components for this project. You’re going to find a lot of code written using class components and this practical experience will help you understand it when encountered. You’ll also revisit this project in a later lesson to replace the class components with functional ones.
// Think about how to structure your application into components. Your application should include:
// A section to add general information like name, email, phone number.
// A section to add your educational experience (school name, title of study, date of study)
// A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
// Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
// Create a components' folder in your src directory and add your components.
// Include a styles' folder in your src directory for your CSS files. You’ll need to import these in the component files to use them.
// Don’t forget to push your solution to GitHub. You should be proud of your work and show it off to the world!
// Tip: If you’re confused on how to deploy using GitHub Pages, take a look at this article
