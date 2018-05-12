import React from 'react';

import Header from '../../main/header/Header';
import Footer from '../../main/footer/Footer';
import Pages from '../../pages/Pages';


class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Pages />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;