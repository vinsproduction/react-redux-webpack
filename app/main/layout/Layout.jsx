import React from 'react';

import Header from 'app/main/header/Header';
import Footer from 'app/main/footer/Footer';
import Pages from 'app/pages/Pages';


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