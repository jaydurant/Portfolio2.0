jest.unmock('../components/contact-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ContactContent from '../components/contact-content';

describe('ContactContent', ()=> {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ContactContent />);
	const renderedTree = renderer.getRenderOutput();
	const h1Element = renderedTree.props.children[0];
	const contactUrl = renderedTree.props.children[1].props.children[1];  
	const buttonList = renderedTree.props.children[2].props.children[1].props.children;

	it("displays author's content", () => {
		expect(h1Element.props.children).toMatch(/contact/i);
		expect(contactUrl.props.href).toMatch(/durantjay/i);
		expect(buttonList.length).toBe(4);
	})
})