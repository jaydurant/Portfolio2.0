jest.unmock('../components/home-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HomeContent from '../components/home-content';

describe('HomeContent', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<HomeContent />);
	const renderedTree = renderer.getRenderOutput();

	it('displays home content', () => {
		expect(renderedTree.props.children.length).toBe(2);
	})
	
})