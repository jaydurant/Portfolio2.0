import React from 'react';
import MenuLink from './menu-link';

function MenuContainer(props) {
	const menuLinks = props.menuLinks.map((elem, i) => <MenuLink {...elem} key={i} />);
	return (
			<ul className="menu-list">
				{menuLinks}
			</ul>
		);
}

MenuContainer.propTypes = {
	menuLinks: React.PropTypes.array,
};

export default MenuContainer;
