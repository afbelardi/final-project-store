import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';

toast.configure();

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

	const handleToken = async (token, addresses) => {
		// console.log({ token, addresses });
		const response = await axios.post('localhost:3000/checkout', {
			token,
			showProduct
		});
		const { status } = response.data;
		if (status === 'success') {
			toast('Success! Check email for details', { type: 'success ' });
		} else {
			toast('Something went wrong', {
				type: 'error'
			});
		}
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
			<button role="link">Checkout</button>
		</div>
	);
}
