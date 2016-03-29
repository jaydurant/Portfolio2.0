import '../../sass/style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import AppContainer from './components/app-container';
import HomeContent from './components/home-content';
import AboutContent from './components/about-content';
import ContactContent from './components/contact-content';


function renderPage() {
	const appRootElement = document.querySelector('#app-root');
	const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
	render((
		<Router history={appHistory}>
			<Route path="/" component={AppContainer} >
				<IndexRoute component={HomeContent} />
				<Route path="/about" component={AboutContent} />
				<Route path="/contact" component={ContactContent} />
			</Route>
		</Router>
		), appRootElement);
}

renderPage();
