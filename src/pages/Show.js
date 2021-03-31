import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StripeCheckout from 'react-stripe-checkout';

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

	const handleToken = (token, addresses) => {
		console.log({ token, addresses });
	};

	return (
		<div className="StorePage">
			<div className="show-wrapper">
				<Header />
			</div>
			<h1 id="show-title">{showProduct.title}</h1>
			<div className="show-section">
				<img className="show-image" src={showProduct.image} />
			</div>
			<div className="stripe-checkout">
				<StripeCheckout
					stripeKey="pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9"
					token={handleToken}
					billingAddress
					shippingAddress
				/>
			</div>
		</div>
	);
}
