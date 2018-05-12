import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from '../commons/AsyncComponent';

const Home = AsyncComponent(() => import('./home/Home'));
const About = AsyncComponent(() => import('./about/About'));

class Pages extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</main>
		);
	}
}

export default Pages;