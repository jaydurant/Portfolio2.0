function htmlCheck(string) {
	return /<.*>/.test(string);
}

function removeText(ref, array, index) {
	let refElem = ref;

	if (refElem.children.item(0)) {
		refElem = refElem.children.item(0);
	}

	const textString = refElem.textContent;
	const textLength = refElem.textContent.length;
	let counter = -1;

	setTimeout(() => {
		const removeStringEnd = setInterval(() => {
			refElem.textContent = textString.slice(0, counter--);
			if (counter === (-textLength - 1)) {
				clearInterval(removeStringEnd);
				if (index < array.length) {
					addText(ref, array, index);
				} else {
					typeWriterAnimate(ref, array);
				}
			}
		}, 100);
	}, 3000);
}

function addText(ref, array, index) {
	let refElem = ref;
	let textString = array[index];
	let nextIndex = index;
	const textLength = array[index].length;
	let counter = 1;

	if (htmlCheck(textString)) {
		const regExp = /<(.*?)>/g;
		const elementString = regExp.exec(textString)[1];
		const htmlElement = document.createElement(elementString);
		textString = textString.replace(regExp, '');
		refElem.appendChild(htmlElement);
		refElem = refElem.children.item(0);
	}

	const addStringForward = setInterval(() => {
		refElem.textContent = textString.slice(0, counter++);
		if (counter > textLength) {
			clearInterval(addStringForward);
			removeText(ref, array, ++nextIndex);
		}
	}, 120);
}

function typeWriterAnimate(ref, array) {
	const refElem = ref;
	addText(refElem, array, 0);
}

export default typeWriterAnimate;
