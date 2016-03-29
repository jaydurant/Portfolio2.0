import React from 'react';
import { Link } from 'react-router';

class AboutContent extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'About Me',
			paragraph:
			`I am a self-taught front end developer, who is
			constantly trying to learn and write modern code.
			I love learning all things Javascript & React.js and strive to write with
			Test Driven Development in mind. Currently, I am volunteering my time coding for CodeForSF
			every week to not only gain experience working on a team but to also help my community.
			Most importantly, I love programming and aim to become more proficient every single day.
			Lastly, I have a growing obsession with Javascript powered web games and new Browser APIs.
			`,
			contactText: 'If you want to contact me regarding a possible position ',
			contactLink: {
				to: '/',
				text: 'click here',
			},
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>
					{this.state.paragraph}
				</p>
				<div>
					<p>
					{this.state.contactText}
					<Link to={this.state.contactLink.to}>
						{this.state.contactLink.text}
					</Link>
					</p>
					<p>
						I firmly believe in the power of Open Source community which and
						the democratization of information, which is why I support and contribute to
						Open Source Projects.
					</p>
				</div>
			</div>
			);
	}
}

export default AboutContent;
