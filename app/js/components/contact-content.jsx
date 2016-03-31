import React from 'react';
import SocialBagdge from './socialbadge-button';

class ContactContent extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Contact Me',
			email: 'durantjay1@gmail.com',
			altText: "jason durant's email",
			socialMediaTitle: 'You will also find me on:',
			socialMedia: [
				{
					url: 'https://github.com/jaydurant',
					text: 'Github',
					icon: 'fa-github',
				},
				{
					url: 'https://twitter.com/JasonHDurant',
					text: 'Twitter',
					icon: 'fa-twitter',
				},
				{
					url: 'https://www.linkedin.com/in/durantjason',
					text: 'LinkedIn',
					icon: 'fa-linkedin',
				},
				{
					url: 'http://www.freecodecamp.com/jaydurant',
					text: 'FreeCodeCamp',
					icon: 'fa-fire',
				},
			],
		};
	}

	render() {
		const buttonList = this.state.socialMedia.map((val, i) => <SocialBagdge {...val} key={i} />);

		return (
			<div className="contact-container">
				<h1>{this.state.title}</h1>
				<div>
					<h2>My email for everyone that is interested</h2>
					<a href={`mailto:${this.state.email}`} alt={this.state.altText}>
					{this.state.email}
					</a>
				</div>
				<div>
					<h3>{this.state.socialMediaTitle}</h3>
					<ul className="contact-buttonlist">
						{buttonList}
					</ul>
				</div>
			</div>
			);
	}
}

export default ContactContent;
