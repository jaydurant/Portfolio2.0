import React from 'react';

function ProjectsItem(props) {
	return (
		<div className="one-half-m project-item-container">
			<div className="project-item project-item-flipper">
				<div className="project-item-front">
					<div>
						<img className="project-image" src={props.image} width="280" height="200" />
					</div>
					<h2>{props.name}</h2>
				</div>
				<div className="project-item-description project-item-back">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
		);
}

ProjectsItem.propTypes = {
	name: React.PropTypes.string,
	description: React.PropTypes.string,
	image: React.PropTypes.string,
};

export default ProjectsItem;
