import React from 'react';
import { Link } from 'react-router';

function MenuLink(props) {
	return (
		<li className="menu-link">
			<Link to={props.to}>{props.text}</Link>
		</li>
		);
}

MenuLink.propTypes = {
	to: React.PropTypes.string,
	text: React.PropTypes.string,
};

export default MenuLink;
