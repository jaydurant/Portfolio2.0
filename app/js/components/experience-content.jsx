import React from 'react';
import ExperienceTimeline from './experience-timeline';

class ExperienceContent extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Experience',
			introParagraph: `I am currently looking for entry-level/junior front end developer roles.
					If you think I would be a good fit please feel free to contact me.
					Below you will see my current experience.
					`,
			workTimeLine: [
				{
					position: 'Team Member',
					organization: 'Code for San Francisco',
					time: 'Dec 2015 - Today',
					image: 'app/assets/sfbrigade.jpg',
					direction: 'left',
				},
				{
					position: 'Digital Marketing Coordinator',
					organization: 'Evernote',
					time: 'Sept 2014 - Nov 2015',
					image: 'app/assets/evernote.jpg',
					direction: 'right',
				},
				{
					position: 'PPC Account Coordinator',
					organization: 'LiveCareer',
					time: 'Jan 2014 - Sept 2014',
					image: 'app/assets/livecareer.jpg',
					direction: 'left',
				},
				{
					position: 'PPC Account Analyst',
					organization: 'LiveCareer',
					time: 'Jan 2014 - Sept 2014',
					image: 'app/assets/livecareer.jpg',
					direction: 'right',
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>
					{this.state.introParagraph}
				</p>
				<ExperienceTimeline timeLine={this.state.workTimeLine} />
			</div>
			);
	}
}

export default ExperienceContent;
