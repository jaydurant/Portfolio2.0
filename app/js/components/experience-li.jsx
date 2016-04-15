import React from 'react';

function ExperienceListItem(props) {
	const textDirection = props.direction === 'left' ? 'timeline-text-left' : 'timeline-text-right';

	return (
		<li className="experience-item">
			<div>
				<div className="experience-image-container">
					<img src={props.image} width="200" height="200" />
					<div className={`${textDirection} experience-item-panel`}>
						<div className="experience-organization">{props.organization}</div>
						<div className="experience-time">{props.time}</div>
						<h4>{`${props.position}`}</h4>
					</div>
				</div>
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
