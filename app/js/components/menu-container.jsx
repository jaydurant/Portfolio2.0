import React from 'react';
import MenuLink from './menu-link';

function MenuContainer(props){
	const menuLinks = props.links.map((elem,i) => {
		return <MenuLink {...elem} key={i} />;
	});
	return(
		<nav>
			<ul>
				{menuLinks}
			</ul>
		</nav>
		);
}

export default MenuContainer;