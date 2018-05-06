import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeA } from 'store/actions/test';
import { changeB } from 'store/actions/rest';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
	}

	clickA(i,e) {
		e.preventDefault();
		const { changeA } = this.props;
		changeA(i);
	}

	clickB(i, e) {
		e.preventDefault();
		const { changeB } = this.props;
		changeB(i);
	}
	

	render() {

		const { a, b } = this.props;

		return (
			<React.Fragment>
				<h1>Home A:{a} B:{b}</h1>
				<p><a href="" onClick={(e) => this.clickA(1,e) }>Change A to 1</a></p>
				<p><a href="" onClick={(e) => this.clickA(2, e)}>Change A to 2</a></p>
				<p><a href="" onClick={(e) => this.clickB(1, e)}>Change B to 1</a></p>
				<p><a href="" onClick={(e) => this.clickB(2, e)}>Change B to 2</a></p>
			</React.Fragment>
		);
	}
}

Home.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number,
	changeA: PropTypes.func,
	changeB: PropTypes.func,
};

const putStateToProps = (state) => {
	return {
		a: state.test.a,
		b: state.rest.b
	};
};

const putActionsToProps = (dispatch) => {
	return {
		changeA: bindActionCreators(changeA, dispatch),
		changeB: bindActionCreators(changeB, dispatch)
	};
};

export default connect(putStateToProps, putActionsToProps)(Home);