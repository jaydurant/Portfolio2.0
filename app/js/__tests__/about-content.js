jest.unmock('../components/about-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AboutContent from '../components/about-content';

describe('AboutContent',() => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<AboutContent />);
	const renderedTree = renderer.getRenderOutput();
	const h1 = renderedTree.props.children[0];
	const headerParagraph = renderedTree.props.children[1];
	const mainContent = renderedTree.props.children[2];
	const mainParagraph1 = mainContent.props.children[0];
	const mainParagraph2 = mainContent.props.children[1];

	it("displays author's content ",() => {
		expect(h1.props.children).toBe('ABOUT ME');
		expect(headerParagraph.props.children.length).toBeGreaterThan(0);
		expect(mainParagraph1.props.className).toBe('about-contact-text');
		expect(mainParagraph2.props.className).toMatch(/mantra/)
	})
})