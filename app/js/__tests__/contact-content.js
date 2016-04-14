jest.unmock('../components/about-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ContactContent from '../components/about-content';

describe('ContactContent', ()=> {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ContactContent />);
	const renderedTree = renderer.getRenderOutput();
	const h1Element = renderedTree.props.children[0];
	const contactUrl = renderedTree.props.children[1].props.children[1];  

	it("displays author's content", () => {
		console.log(h1Element)
		expect(h1Element.props.children).toMatch(/about/i);
	})
})