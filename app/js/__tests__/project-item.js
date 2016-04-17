jest.unmock('../components/project-item');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ProjectItem from '../components/project-item';

const props = {
	name: 'new-projext',
	description: 'a new project',
	image: 'test-image',
	tools: ['car', 'hey'],
	github: 'teststring',
	demo: 'test-demo',
}

describe('ProjectItem', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ProjectItem {...props} />)
	const renderTree = renderer.getRenderOutput();
	const itemFront = renderTree.props.children.props.children[0].props.children;
	const image = itemFront[0].props.children.props.src;
	const h2Element = itemFront[1];
	const itemBack = renderTree.props.children.props.children[1].props.children;
	const description = itemBack[0];
	const tools = itemBack[1].props.children[1].props.children;
	const projectLinks = itemBack[1].props.children[2];
	it('displays passed image', () => {
		expect(image).toBe(props.image);
	});

	it('displays proper project content', () => {
		expect(h2Element.props.children).toBe(props.name);
		expect(description.props.children).toBe(props.description);
		expect(tools.length).toBe(2);
		expect(projectLinks.props.children[0].props.href).toBe(props.github);
		expect(projectLinks.props.children[1].props.href).toBe(props.demo);

	})
})

