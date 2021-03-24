import React from 'react';
import Store from '../pages/Store';
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
		Component: Store,
		key: 'Store',
		path: '/'
	}
];

export default routes;
