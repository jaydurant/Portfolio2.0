jest.unmock('../components/header-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HeaderContainer from '../components/header-container';

const properties = {
	links: [1,2],
};

describe('HeaderContainer', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<HeaderContainer {...properties} />);
	const renderedTree = renderer.getRenderOutput();

	const header = renderedTree;
	const titleDiv = header.props.children[0];
	const menuDiv = header.props.children[1];

	it("displays the website's title", () => {
		expect(titleDiv.props.children[0].props.children[0]).toBe('JASON DURANT ');
	});

	it('displays the menu and menulinks', () => {
		expect(menuDiv.props.menuLinks).toEqual(properties.menulinks);
	});
}); 