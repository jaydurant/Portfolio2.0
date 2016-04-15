jest.unmock('../components/experience-timeline');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ExperienceTimeline from '../components/experience-timeline';

const props = {timeLine: [{
					position: 'Web Developer / Volunteer',
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
				}]};

describe('ExperienceTimeline',() => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ExperienceTimeline {...props} />);
	const renderedTree = renderer.getRenderOutput();
	const listItems = renderedTree.props.children.props.children;
	it('displays the appropriate number of list items',() => {
		expect(listItems.length).toBe(2)
	})
})