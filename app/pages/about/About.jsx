import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class About extends React.Component {
	render() {

		const { a, b } = this.props;

		return (
			<h1>About A:{a} B:{b}</h1>
		);
	}
}

About.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number
};

const putStateToProps = (state) => {
	return {
		a: state.test.a,
		b: state.rest.b
	};
};

const putActionsToProps = (dispatch) => {
	return {
	};
};

export default connect(putStateToProps, putActionsToProps)(About);