jest.unmock('../components/socialbadge-button');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SocialBadgeButton from '../components/socialbadge-button';

const props = {
	url: 'test-url',
	text: 'test-text',
	icon: 'test-icon',
}

describe('SocialBadgeButton', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<SocialBadgeButton {...props}/>);
	const renderedTree = renderer.getRenderOutput();
	const anchorElement = renderedTree.props.children;
	const buttonChildren = anchorElement.props.children.props.children;

	it('displays social badge content', () => {
		expect(anchorElement.props.href).toBe(props.url);
		expect(buttonChildren[0].props.className).toMatch(/test/i);
		expect(buttonChildren[1]).toBe(props.text);
	})
})