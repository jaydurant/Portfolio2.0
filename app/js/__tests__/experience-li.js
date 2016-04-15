jest.unmock('../components/experience-li');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ExperienceLi from '../components/experience-li';

const props = {
	position: 'car salesman',
	organization: 'toyota',
	time: 'December',
	image: 'test.jpg',
	direction: 'left',
};

describe('ExperienceLi', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ExperienceLi {...props} />);
	const renderedTree = renderer.getRenderOutput();
	const mainContent = renderedTree.props.children.props.children;
	const image = mainContent.props.children[0];
	const textContent = mainContent.props.children[1];
	const organization = textContent.props.children[0];
	const time = textContent.props.children[1];
	const position = textContent.props.children[2];

	it('displays image url', () => {
		expect(image.props.src).toBe(props.image);
	})

	it('displays text direction left', () => {
		expect(textContent.props.className).toMatch(/left/i);
	})

	it('displays expected text content', () => {
		expect(organization.props.children).toBe(props.organization);
		expect(position.props.children).toBe(props.position);

	})


})