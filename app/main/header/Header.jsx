import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	
	render() {

		const { a, b } = this.props;

		return (
			<header>
				<h3>Header A:{a} B:{b}</h3>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/about'>About</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}

Header.propTypes = {
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
	return {};
};

export default connect(putStateToProps, putActionsToProps)(Header);