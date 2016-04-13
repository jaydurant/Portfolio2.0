jest.unmock('../components/menu-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MenuContainer from '../components/menu-container';

const properties = {
	menuLinks:[
		{
			to: 'test1',
			text: 'test1'
		},
		{
			to: 'test2',
			text: 'test2'
		}
	]
};

describe ('MenuContainer', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<MenuContainer {...properties} />);
	const ul = renderer.getRenderOutput();
	const firstULChild = ul.props.children[0];

	it('displays the menu container with the appropriate children', () => {
		expect(ul.props.children.length).toBe(2);
		expect([firstULChild.props.to,firstULChild.props.text]).toEqual([properties.menuLinks[0].to, properties.menuLinks[0].text]);
	});
});