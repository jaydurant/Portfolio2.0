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
					tools: ['React', 'React-Router', 'ES6', 'Node.js', 'JS', 'Sass', 'Webpack',
					'HTML5', 'eslint', 'Jasmine'],
					demo: '',
					github: 'https://github.com/jaydurant/Portfolio2.0',
				},
				{
					name: 'GetCarrot',
					description: 'Prototype Chat UI built with React and Flux',
					image: 'app/assets/get-carrot.jpg',
					tools: ['React', 'Flux', 'AJAX', 'Browserify', 'ES6', 'Node.js', 'JS',
					'Sass', 'Gulp', 'HTML5', 'eslint', 'Jasmine'],
					demo: 'http://jaydurant.github.io/GetCarrot/',
					github: 'https://github.com/jaydurant/GetCarrot',
				},
				{
					name: 'JS-Calculator',
					description: 'Calculator built with Vanilla Javascript',
					image: 'app/assets/jscalc.jpg',
					tools: ['JS', 'AJAX', 'ES6', 'Sass', 'Gulp', 'Bootstrap', 'HTML5', 'eslint'],
					demo: 'http://jaydurant.github.io/JS-Calculator/',
					github: 'https://github.com/jaydurant/JS-Calculator',

				},
				{
					name: 'Pomodoro Clock',
					description: 'Productivity Timer Built with jQuery',
					image: 'app/assets/pomodoroclock.jpg',
					tools: ['JS', 'Sass', 'Gulp', 'HTML5'],
					demo: 'https://jaydurant.github.io/Pomodoro-Clock/',
					github: 'https://github.com/jaydurant/Pomodoro-Clock',
				},
				{
					name: 'Quote Generator',
					description: 'Motivational Quotes Built with Vanilla JS',
					image: 'app/assets/motivatequotes.jpg',
					tools: ['JS', 'Sass', 'Gulp', 'HTML5'],
					demo: 'http://jaydurant.github.io/Quote-Generator/',
					github: 'https://github.com/jaydurant/Quote-Generator',
				},
				{
					name: 'Eloquent JS Answers',
					description: 'My own answers to the EQ problem set',
					image: 'app/assets/eqexercises.jpg',
					tools: ['JS', 'HTML5', 'Canvas'],
					demo: '',
					github: 'https://github.com/jaydurant/EloquentJSExercises',
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
