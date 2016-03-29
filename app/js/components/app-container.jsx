import React from 'react';
import HeaderContainer from './header-container';

class AppContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			menuLinks: [
				{ to: '/about', text: 'about' },
				{ to: '/portfolio', text: 'portfolio' },
				{ to: '/experience', text: 'experience' },
				{ to: '/contact', text: 'contact' },
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
