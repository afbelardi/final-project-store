import React from 'react';
import Store from '../pages/Store';
import About from '../pages/About';
import About from '../pages/About';

const routes = [
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: Store,
		key: 'Store',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	}
];

export default routes;
