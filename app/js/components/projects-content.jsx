import React from 'react';
import ProjectItem from './project-item';

class ProjectsContent extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'My Projects',
			introText: `Since I have quite a few repos, I have compiled the repos
			which show my latest projects and skills. I use github to organize, share, and collaborate
			with other developers feel free to take a look at my entire github profile
			if you feel adventurous.`,
			projects: [
				{
					name: 'Portfolio 2.0',
					description: 'Current Site built with React.js',
					image: 'app/assets/portfolio2.jpg',
				},
				{
					name: 'GetCarrot',
					description: 'Prototype Chat UI built with React and Flux',
					image: 'app/assets/get-carrot.jpg',
				},
				{
					name: 'JS-Calculator',
					description: 'Calculator built with Vanilla Javascript',
					image: 'app/assets/jscalc.jpg',
				},
				{
					name: 'Pomodoro Clock',
					description: 'Productivity Timer Built with jQuery',
					image: 'app/assets/pomodoroclock.jpg',
				},
				{
					name: 'Quote Generator',
					description: 'Motivational Quotes Built with Vanilla JS',
					image: 'app/assets/motivatequotes.jpg',
				},
				{
					name: 'Eloquent JS Answers',
					description: 'My own answers to the EQ problem set',
					image: 'app/assets/eqexercises.jpg',
				},
			],
		};
	}

	render() {
		const projectsList = this.state.projects.map((val, i) => <ProjectItem {...val} key={i} />);

		return (
			<div className="projects-container">
				<h1>{this.state.title}</h1>
				<div>
					<p className="one-half-m projects-intro">{this.state.introText}</p>
				</div>
				<div className="three-quarters-m">
					{projectsList}
				</div>
			</div>
			);
	}
}

export default ProjectsContent;
