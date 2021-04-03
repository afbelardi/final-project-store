import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckOutForm';

// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

export default function Show(props) {
	const [showProduct, setShowProduct] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos/${props.match.params.id}`);
				const data = await response.json();
				setShowProduct(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<div className="StorePage">
			<div className="show-wrapper">
				<Header />
			</div>
			<h1 id="show-title">{showProduct.title}</h1>
			<div className="show-section">
				<img className="show-image" loading="lazy" src={showProduct.image} />
			</div>
			<h2 id="size">{showProduct.size}</h2>
			<h3 id="price">${showProduct.price}</h3>
			<div id="checkout-form">
				<CheckoutForm data={showProduct} />
			</div>
		</div>
	);
}
