import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderContainer from './header-container';
import menuScrollEffect from '../utils/menuScrollEffect';

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

	componentDidMount() {
		const menuNode = this._menu.querySelector('header');
		menuScrollEffect(menuNode, 'header-container--pinned');
	}

	toggleMenuIcon() {
		this.setState({ menuState: !this.state.menuState });
	}

	render() {
		return (
			<div className="app-container" >
				<div ref={(elem) => this._menu = elem }>
					<HeaderContainer menuState={this.state.menuState} menuLinks={this.state.menuLinks} toggleMenu={this.toggleMenuIcon} />
				</div>
				<section>
					<ReactCSSTransitionGroup transitionName="view" transitionEnterTimeout={2000} transitionLeaveTimeout={300} transitionAppear>
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname,
					})}
					</ReactCSSTransitionGroup>
				</section>
			</div>
			);
	}

}

AppContainer.propTypes = {
	children: React.PropTypes.object,
	location: React.PropTypes.object,
};

export default AppContainer;
