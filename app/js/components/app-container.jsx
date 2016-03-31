import React from 'react';
import HeaderContainer from './header-container';

class AppContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			menuLinks: [
				{ to: '/about', text: 'About' },
				{ to: '/projects', text: 'Projects' },
				{ to: '/experience', text: 'Experience' },
				{ to: '/contact', text: 'Contact' },
			],
		};
	}

	render() {
		return (
			<div>
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