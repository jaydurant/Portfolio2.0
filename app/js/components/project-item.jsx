import React from 'react';

function ProjectsItem(props) {
	return (
		<div>
			<div>
				<div>
					<div>
						<img src={props.image} />
					</div>
					<h2>{props.name}</h2>
				</div>
				<div>
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
