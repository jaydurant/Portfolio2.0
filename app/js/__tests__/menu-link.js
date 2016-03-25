jest.unmock('../components/menu-link');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MenuLink from '../components/menu-link';

const properties = {
	to: 'test-url',
	text: 'test-text'
};

describe ('MenuLink', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<MenuLink {...props} />);
	const renderedTree = renderer.getRenderOutput();

	const li = renderedTree;
	const link = renderedTree.props.children;

	it('displays a link with a anchor tag', () => {
		expect(li.props.className).toBe(properties.className);

		expect(link.props.to).toBe(properties.to);
		expect(link.props.children).toBe(proper.text);
	});
});