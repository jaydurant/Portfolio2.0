import React from 'react';
import MenuContainer from './menu-container';
import { IndexLink } from 'react-router';

function HeaderContainer(props) {
	const spaceIcon = <i className="fa fa-keyboard-o fa-lg"></i>;
	const menuState = props.menuState ? 'menu-icon--open' : 'menu-icon--close';
	return (
		<header className={`container header-container ${menuState}`}>
			<div className="one-half-m menu-home-link">
				<IndexLink to="/">JASON DURANT {spaceIcon} FRONT END DEVELOPER</IndexLink>
				<div className="menu-icon" onClick={props.toggleMenu}></div>
			</div>
			<nav className="nav-container">
				<MenuContainer {...props} />
			</nav>
			<div className="header-strobe">
			</div>
		</header>
		);
}

HeaderContainer.propTypes = {
	menuState: React.PropTypes.bool,
	toggleMenu: React.PropTypes.func,
};

export default HeaderContainer;
