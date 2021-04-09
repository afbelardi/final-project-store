import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
	'pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9'
);
import { loadStripe } from '@stripe/stripe-js';

const AppRouter = () => {
	return (
		<Router>
			<Elements stripe={stripePromise}>
				{/* <NavBar routes={routes} /> */}
				<Switch>
					{routes.map(({ Component, key, path }) => (
						<Route
							key={key}
							path={path}
							component={props => <Component {...props} page={key} />}
						></Route>
					))}
				</Switch>
			</Elements>
		</Router>
	);
};

export default AppRouter;
