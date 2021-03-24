import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Login from '../pages/Login';

const routes = [
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
