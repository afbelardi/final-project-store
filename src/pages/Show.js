import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckOutForm';

const stripePromise = loadStripe(
	'pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9'
);

export default function Show(props) {
	const [showProduct, setShowProduct] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos/${props.match.params.id}`);
				const data = await response.json();
				console.log(data);
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
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
}
