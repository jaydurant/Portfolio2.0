import React from 'react';

function ExperienceListItem(props) {
	const textDirection = props.direction === 'left' ? 'timeline-text-left' : 'timeline-text-right';

	return (
		<li>
			<div className={textDirection}>
				<div>{props.organization}</div>
				<div>{props.time}</div>
				<h4>{`Position: ${props.position}`}</h4>
			</div>
			<div>
				<img src={props.image} />
			</div>
		</li>
		);
}

ExperienceListItem.propTypes = {
	position: React.PropTypes.string,
	organization: React.PropTypes.string,
	time: React.PropTypes.string,
	image: React.PropTypes.string,
	direction: React.PropTypes.string,
};

export default ExperienceListItem;
