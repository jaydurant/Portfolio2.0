import React from 'react';
import typeWriterAnimate from '../utils/typeWriterAnimate';

class HomeContent extends React.Component {
	constructor() {
		super();
		this.state = {
			introText: [
				'To Become A Front End Developer',
				'Help My Community Through Code',
				"<code>import {Education, Grit, Persistence} from 'open-source';</code>",
			],
		};
	}

	componentDidMount() {
		typeWriterAnimate(this._typeSpan, this.state.introText);
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div>
				<h1>My Goals and Aspirations</h1>
				<div>
					<span ref={(elem) => this._typeSpan = elem }>
					</span>
					<span>|</span>
				</div>
			</div>
			);
	}
}

export default HomeContent;
