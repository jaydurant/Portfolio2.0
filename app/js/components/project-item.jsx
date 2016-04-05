import React from 'react';

function ProjectsItem(props) {
	console.log(props);
	const tools = props.tools.map((val, i) => <li key={i}>{val}</li>);
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
					<div>
						<h3>Tools & Links</h3>
						<ul className="one-half-s">
							{tools}
						</ul>
						<div className="one-half-s project-links">
							<a href={props.github}>Github Page</a>
							<a href={props.demo}>Project Demo</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

ProjectsItem.propTypes = {
	name: React.PropTypes.string,
	description: React.PropTypes.string,
	image: React.PropTypes.string,
	tools: React.PropTypes.array,
	github: React.PropTypes.string,
	demo: React.PropTypes.string,
};

export default ProjectsItem;
