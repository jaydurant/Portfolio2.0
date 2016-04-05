import React from 'react';
import MenuLink from './menu-link';

function MenuContainer(props) {
	const menuLinks = props.menuLinks.map((elem, i) => <MenuLink {...elem} key={i} />);

	return (
			<ul className="menu-list" onClick={props.toggleMenu}>
				{menuLinks}
			</ul>
		);
}

MenuContainer.propTypes = {
	menuLinks: React.PropTypes.array,
	toggleMenu: React.PropTypes.func,
};

export default MenuContainer;
