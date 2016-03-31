import React from 'react';

function SocialBadge(props) {
	return (
		<li>
			<a href={props.url}>
				<button type="button">
					<i className={`fa ${props.icon}`} ></i>{props.text}
				</button>
			</a>
		</li>
		);
}

SocialBadge.propTypes = {
	url: React.PropTypes.string,
	text: React.PropTypes.string,
	icon: React.PropTypes.string,
};

export default SocialBadge;
