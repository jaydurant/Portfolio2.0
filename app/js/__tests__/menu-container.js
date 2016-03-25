jest.unmock('../components/menu-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MenuContainer from '../components/menu-container';

const properties = {
	links:[
		{
			to: 'test',
			text: 'test'
		},
		{
			to: 'test',
			text: 'test'
		}
	]
};

describe ('MenuContainer', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<MenuContainer {...properties} />);
	const renderedTree = renderer.getRenderOutput();
	const ul =  renderedTree.props.children;
	const firstULChild = ul.props.children[0];

	it('displays the menu container with the appropriate children', () => {
		expect(ul.props.children.length).toBe(2);
		expect([firstULChild.props.to,firstULChild.props.text]).toEqual([properties.links[0].to, properties.links[0].text]);
	});
});