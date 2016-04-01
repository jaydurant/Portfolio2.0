import React from 'react';
import MenuContainer from './menu-container';
import { IndexLink } from 'react-router';

function HeaderContainer(props) {
	return (
		<header className="container header-container">
			<div className="one-half-m menu-home-link">
				<IndexLink to="/">JASON DURANT - FRONT END DEVELOPER</IndexLink>
			</div>
			<nav className="one-half-m">
				<MenuContainer {...props} />
			</nav>
			<div className="header-strobe">
			</div>
		</header>
		);
}

export default HeaderContainer;
