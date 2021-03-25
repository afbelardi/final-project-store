import React from 'react';
import Store from '../pages/Store';
import About from '../pages/About';

const routes = [
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
