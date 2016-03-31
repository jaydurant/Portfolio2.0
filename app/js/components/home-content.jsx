import React from 'react';
import typeWriterAnimate from '../utils/typeWriterAnimate';

class HomeContent extends React.Component {
	constructor() {
		super();
		this.state = {
			introText: [
				'To Become A World Class Front End Developer',
				'Help My Community Through Code',
				"<code>import {Education, Grit, Persistence} from 'open-source';</code>",
			],
		};
	}

	componentDidMount() {
		typeWriterAnimate(this._typeSpan, this.state.introText);
	}

	render() {
		return (
			<div className="home-container">
				<h1>My Goals and Aspirations</h1>
				<div>
					<span className="home-typewriter" ref={(elem) => this._typeSpan = elem }>
					</span>
					<span className="home-typecursor">|</span>
				</div>
			</div>
			);
	}
}

export default HomeContent;
