import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckOutForm';

const stripePromise = loadStripe(
	'pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9'
);

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

	const handleClick = async event => {
		// Get Stripe.js instance
		console.log(showProduct.price);
		const stripe = await stripePromise;

		// Call your backend to create the Checkout Session
		const response = await fetch('/create-checkout-session', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				price: showProduct.price,
				title: showProduct.title,
				image: showProduct.image,
				id: showProduct._id
			})
		});

		const session = await response.json();

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	};

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
				{/* <CheckoutForm
					data={showProduct}
					price={showProduct.price}
					onSuccessfulCheckout={() => Router.push('/success')}
				/> */}
				<button role="link" onClick={handleClick}>
					Checkout
				</button>
			</div>
		</div>
	);
}
