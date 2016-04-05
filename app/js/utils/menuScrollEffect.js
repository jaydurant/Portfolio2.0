function menuScrollEffect(node, className) {
	window.addEventListener('scroll', () => {
		window.requestAnimationFrame(() => {
			const body = document.body;
			const html = document.documentElement;

			const height = Math.max(body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight) * 0.01;

			const windowScrolled = window.scrollY;
			console.log(windowScrolled, height);
			if (windowScrolled > height) {
				console.log('over');
				node.classList.add(className);
			} else {
				console.log('below');
				node.classList.remove(className);
			}
		});
	});
}

export default menuScrollEffect;
