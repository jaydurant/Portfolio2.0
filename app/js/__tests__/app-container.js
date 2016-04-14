jest.unmock('../components/app-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../components/app-container';

describe('AppContainer', () => {
	const renderer =  TestUtils.createRenderer();
	renderer.render(<AppContainer children={<div>hey</div>} location={{pathname:'testpath'}} />);
	let renderedTree = renderer.getRenderOutput();
	let headerContainer = renderedTree.props.children[0].props.children;

	it('displays appcontainer content', () => {
		expect(renderedTree.props.children.length).toBe(2);
	});

	it('menu toggles initial menu state of false', () => {
		expect(headerContainer.props.menuState).toBe(false);
	});

	it('menu toggles menu state of true', () => {
		headerContainer.props.toggleMenu();
		renderedTree = renderer.getRenderOutput();
		headerContainer = renderedTree.props.children[0].props.children;
		expect(headerContainer.props.menuState).toBe(true);
	});

});
