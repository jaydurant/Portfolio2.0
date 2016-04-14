jest.unmock('../components/app-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../components/app-container';

describe('AppContainer', () => {
	const renderer =  TestUtils.createRenderer();
	renderer.render(<AppContainer children={<div>hey</div>} location={{pathname:'testpath'}} />);
	const renderedTree = renderer.getRenderOutput();
	console.log(renderedTree);

	it('displays appcontainer content', () => {

	});
});
