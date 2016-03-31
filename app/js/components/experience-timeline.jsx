import React from 'react';
import ExperienceListItem from './experience-li';

function ExperienceTimeline(props) {
	const experienceItems = props.timeLine.map((val, i) => <ExperienceListItem {...val} key={i} />);

	return (
		<ul className="experience-timeline">
			{experienceItems}
		</ul>
		);
}

ExperienceTimeline.propTypes = {
	timeLine: React.PropTypes.array,
};

export default ExperienceTimeline;
