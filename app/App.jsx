import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from './main/layout/Layout';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { hasMounted: false };

		setTimeout(() => {
			this.setState({ hasMounted: true });
		}, 1000);

	}

	render() {

		const { hasMounted } = this.state;

		if (!hasMounted) {
			return (
				<React.Fragment>
					<div>App loading...</div>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<Layout />
			</React.Fragment>
		);
	}
}

App.propTypes = {

};

const putStateToProps = (state) => {
	return {
	};
};

const putActionsToProps = (dispatch) => {
	return {
	};
};

export default withRouter(connect(putStateToProps, putActionsToProps)(App));