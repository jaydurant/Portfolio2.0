jest.unmock('../../utils/typeWriterAnimate');

import typeWriterAnimate from '../../utils/typeWriterAnimate';
const sampleTextArray = ['a','b'];

describe('typeWriterAnimate', () => {
	document.body.innerHTML = '<div>' +
      		"<header></header>"+
      		'</div>';
    const header = document.querySelector('header');

	it("calls addText's setInterval after 120 milliseconds", () => {
      	typeWriterAnimate(header, sampleTextArray);
      	expect(setInterval.mock.calls.length).toBe(1);
      	expect(setInterval.mock.calls[0][1]).toBe(120);
	})

	it("calls removeText's setTimeout after 3000 milliseconds" , () => {
		typeWriterAnimate(header,sampleTextArray);
		jest.runOnlyPendingTimers();
      	expect(setTimeout.mock.calls.length).toBe(1);
      	expect(setTimeout.mock.calls[0][1]).toBe(3000);
	})

	it("calls removeText's setInterval after 60 milliseconds", () => {
		typeWriterAnimate(header,sampleTextArray);
		jest.runOnlyPendingTimers();
		jest.runOnlyPendingTimers();
		console.log(setInterval.mock.calls)
		expect(setInterval.mock.calls.length).toBe(2);
		expect(setInterval.mock.calls[1][1]).toBe(60);
	})
})