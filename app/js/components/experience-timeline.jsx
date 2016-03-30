import React from 'react';
import ExperienceListItem from './experience-li';

function ExperienceTimeline(props) {
	const experienceItems = props.timeLine.map((val) => <ExperienceListItem {...val} />);

	return (
		<ul>
			{experienceItems}
		</ul>
		);
}

ExperienceTimeline.propTypes = {
	timeLine: React.PropTypes.array,
};

export default ExperienceTimeline;
