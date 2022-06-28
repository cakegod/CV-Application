import React, { Component } from 'react';
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     general: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: ""
     },
     experience: {
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
     },
     education: {
      school: "",
      degree: "",
      description: "",
      startDate: "",
      endDate: "",
     }
    }
  }

  handleInputValue = (event) => {
    this.setState({
      general: { 
        ...this.state.general,
        [event.target.name]: event.target.value
      },
      experience: { 
        ...this.state.experience,
        [event.target.name]: event.target.value
      },
      education: { 
        ...this.state.education,
        [event.target.name]: event.target.value
      }
    })
  }

	render() {
		return (
      <form>
        <General handleInput={this.handleInputValue}/>
        <Experience handleInput={this.handleInputValue}/>
        <Education handleInput={this.handleInputValue} />
      </form>
		)
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
