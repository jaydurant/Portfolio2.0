import React from 'react';

function MenuLink(props){
	return(
		<li className="menu-link">
			<Link to={props.to}>{props.text}</Link>
		</li>
		);
}

export default MenuLink;