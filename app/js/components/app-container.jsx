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
			menuState: false,
		};
		this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
	}

	toggleMenuIcon() {
		this.setState({ menuState: !this.state.menuState });
	}

	render() {
		return (
			<div className="app-container">
				<HeaderContainer menuState={this.state.menuState} menuLinks={this.state.menuLinks} toggleMenu={this.toggleMenuIcon} />
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
