jest.unmock('../components/projects-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ProjectsContent from '../components/projects-content';

describe('ProjectContent', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ProjectsContent />);
	const renderedTree = renderer.getRenderOutput();
	const h1Element = renderedTree.props.children[0];
	const mainParagraph = renderedTree.props.children[1].props.children;
	const projectsList = renderedTree.props.children[2].props.children;

	it("displays all project's content", () => {
		expect(h1Element.props.children).toMatch(/project/i);
		expect(mainParagraph.props.children.length).toBeGreaterThan(10);
		expect(projectsList.length).toBe(6);
	})

})

