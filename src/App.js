import React, { Component } from 'react';
import Education from './components/Form/Education';
import Experience from './components/Form/Experience';
import General from './components/Form/General';
import EducationView from './components/Viewer/EducationView';
import GeneralViewer from './components/Viewer/GeneralViewer';
import ExperienceViewer from './components/Viewer/ExperienceViewer';
import './styles/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// General
			firstName: '',
			lastName: '',
			emailAddress: '',
			phoneNumber: '',

			// Experience
			company: '',
			position: '',
			workDescription: '',
			workStartDate: '',
			workEndDate: '',

			// Education
			school: '',
			degree: '',
			degreeDescription: '',
			degreeStartDate: '',
			degreeEndDate: '',
		};
	}

	handleInputValue = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className='container'>
				<form>
					<General
						handleInput={this.handleInputValue}
						value={this.state}
					></General>
					<Experience handleInput={this.handleInputValue} value={this.state} />
					<Education handleInput={this.handleInputValue} value={this.state} />
					<button className='submit-button'>Submit CV</button>
				</form>
				<div className='cv-viewer'>
					<GeneralViewer />
					<EducationView />
					<ExperienceViewer />
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
// Create a components folder in your src directory and add your components.
// Include a styles folder in your src directory for your CSS files. You’ll need to import these in the component files to use them.
// Don’t forget to push your solution to GitHub. You should be proud of your work and show it off to the world!
// Tip: If you’re confused on how to deploy using GitHub Pages, take a look at this article
