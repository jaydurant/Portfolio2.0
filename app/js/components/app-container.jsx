import React from 'react';
import HeaderContainer from './header-container';

class AppContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			menuLinks: [
				{ to: '/about', text: 'ABOUT' },
				{ to: '/projects', text: 'PROJECTS' },
				{ to: '/experience', text: 'EXPERIENCE' },
				{ to: '/contact', text: 'CONTACT' },
			],
		};
	}

	render() {
		return (
			<div className="app-container">
				<HeaderContainer menuLinks={this.state.menuLinks} />
				<section>
					{this.props.children}
				</section>
			</div>
			);
	}

}

AppContainer.propTypes = {
	children: React.PropTypes.object,
};

export default AppContainer;
