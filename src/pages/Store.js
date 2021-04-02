import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Products from '../components/Products';
import CheckoutForm from '../components/CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
	'pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9'
);

export default function Store(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos`);
				const data = await response.json();
				await setProducts(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<div className="StorePage">
			<Header />
			<h1 id="store-title">STORE</h1>
			<Products data={products} />
		</div>
	);
}
