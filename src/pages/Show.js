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
					stripeKey="pk_live_51IaUxUBxAJS3ymB41mIEolPAupgR0xyCQW21dm090876fpjSh9iVOfV95UnX5jZk2fuRY96wqDhsEdHbZDpJif0z00Qxwgw0IA"
					token={handleToken}
				/>
			</div>
		</div>
	);
}
