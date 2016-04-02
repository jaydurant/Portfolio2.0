import React from 'react';
import ExperienceListItem from './experience-li';

function ExperienceTimeline(props) {
	const experienceItems = props.timeLine.map((val, i) => <ExperienceListItem {...val} key={i} />);

	return (
		<div>
			<ul className="one-half-m experience-timeline">
				{experienceItems}
			</ul>
		</div>
		);
}

ExperienceTimeline.propTypes = {
	timeLine: React.PropTypes.array,
};

export default ExperienceTimeline;
