import React from 'react';
import MenuLink from './menu-link';

function MenuContainer(props) {
	const menuLinks = props.menuLinks.map((elem, i) => <MenuLink {...elem} key={i} />);
	return (
		<nav>
			<ul>
				{menuLinks}
			</ul>
		</nav>
		);
}

MenuContainer.propTypes = {
	menuLinks: React.PropTypes.array,
};

export default MenuContainer;
