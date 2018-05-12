import React from 'react';


const AsyncComponent = (importComponent) => {

	return class Component extends React.Component {

		state = {
			component: null,
		}

		componentDidMount() {

			importComponent().then((component) => {
				this.setState({ component: component.default });
			});

		}

		render() {
			const Component = this.state.component;

			return (Component) ? (
				<React.Fragment>
					{Component ? <Component {...this.props} /> : null}
				</React.Fragment>
			) : (
					<React.Fragment>
						<p>Загрузка...</p>
					</React.Fragment>
				);

		}
	};
};


export default AsyncComponent;