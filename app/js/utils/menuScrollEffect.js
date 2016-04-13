function menuScrollEffect(node, className) {
	window.addEventListener('scroll', () => {
		window.requestAnimationFrame(() => {
			const body = document.body;
			const html = document.documentElement;

			const height = Math.max(body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight) * 0.01;

			const windowScrolled = window.scrollY;
			if (windowScrolled > height) {
				node.classList.add(className);
			} else {
				node.classList.remove(className);
			}
		});
	});
}

export default menuScrollEffect;
