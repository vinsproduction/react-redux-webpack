import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AsyncComponent extends PureComponent {
	
	constructor(props) {
		super(props);

		this.state = {
			Component: null
		};
	}

	unCamelCase(s) {
		return s.split(/(?=[A-Z])/).join('-').toLowerCase();
	}

	componentWillMount() {
		if (!this.state.Component) {
			this.props.moduleProvider().then(( component ) => {
				document.body.setAttribute('page', this.unCamelCase(component.default.name));
				this.setState({ component: component.default });
			});
		}
	}

	componentWillUnmount() {
		document.body.removeAttribute('page');
	}

	render() {
		const Component = this.state.component;
		return (
			<React.Fragment>
				{/* {Component ? <Component {...this.props} /> : null} */}
				{Component ? <Component /> : null}
			</React.Fragment>
		);
	}
}

AsyncComponent.propTypes = {
	moduleProvider: PropTypes.func
};