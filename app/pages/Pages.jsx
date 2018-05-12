import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from '../commons/AsyncComponent';

const Home = () => import('./home/Home');
const About = () => import('./about/About');

class Pages extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={() => <AsyncComponent moduleProvider={Home} />} />
					<Route path='/about' component={() => <AsyncComponent moduleProvider={About} />} />
				</Switch>
			</main>
		);
	}
}

export default Pages;