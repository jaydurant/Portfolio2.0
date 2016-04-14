jest.unmock('../components/experience-content');
jest.unmock('../components/experience-timeline');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ExperienceContent from '../components/experience-content';

describe('ExperienceContent', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ExperienceContent />);
	const renderedTree = renderer.getRenderOutput();
	const h1Element = renderedTree.props.children[0];
	const mainParagraph = renderedTree.props.children[1];
	const experienceTimeline = renderedTree.props.children[2];

	it("displays experience content", () => {
		expect(h1Element.props.children).toMatch(/experience/i);
		expect(mainParagraph.props.children.length).toBeGreaterThan(10);
		expect(experienceTimeline.props.timeLine.length).toBe(5);

	})
})