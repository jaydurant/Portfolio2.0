import React from 'react';

function SocialBadge(props) {
	return (
		<li>
			<a href={props.url}>
				<button type="button">
					{props.text}
				</button>
			</a>
		</li>
		);
}

SocialBadge.propTypes = {
	url: React.PropTypes.string,
	text: React.PropTypes.string,
};

export default SocialBadge;
