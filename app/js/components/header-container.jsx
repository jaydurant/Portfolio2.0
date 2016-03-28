import React from 'react';
import MenuContainer from './menu-container';
import { IndexLink } from 'react-router';

function HeaderContainer(props) {
	return (
		<header>
			<div>
				<IndexLink to="/">Jason Durant | Front End Developer</IndexLink>
			</div>
			<div>
				<MenuContainer {...props} />
			</div>
		</header>
		);
}

export default HeaderContainer;
