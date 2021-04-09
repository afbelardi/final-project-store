import React from 'react';
import Store from '../pages/Store';
import About from '../pages/About';
import Show from '../pages/Show';
import Success from '../pages/Success';

const routes = [
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Success,
		key: 'Success',
		path: '/success'
	},
	{
		Component: Show,
		key: 'Show',
		path: '/:id'
	},

	{
		Component: Store,
		key: 'Store',
		path: '/'
	}
];

export default routes;
