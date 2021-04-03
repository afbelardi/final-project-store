import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Row from './prebuilt/Row';
import BillingDetailsFields from './prebuilt/BillingDetailsFields';
import SubmitButton from './prebuilt/SubmitButton';
import CheckoutError from './prebuilt/CheckoutError';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Stripe from 'stripe';

const CardElementContainer = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	& .StripeElement {
		width: 100%;
		padding: 15px;
	}
`;

export default function CheckOutForm(props, { onSuccessfulCheckout }) {
	const [isProcessing, setProcessingTo] = useState(false);
	const [checkoutError, setCheckoutError] = useState();
	const [showProduct, setShowProduct] = useState({});

	const stripe = useStripe();
	const elements = useElements();

	const handleCardDetailsChange = event => {
		event.error ? setCheckoutError(event.error.message) : setCheckoutError();
	};

	const handleFormSubmit = async ev => {
		ev.preventDefault();

		const billingDetails = {
			name: ev.target.name.value,
			email: ev.target.email.value,
			address: {
				city: ev.target.city.value,
				line1: ev.target.address.value,
				state: ev.target.state.value,
				postal_code: ev.target.zip.value
			}
		};
	};

	setProcessingTo(true);

	console.log(clientSecret);

	const cardElement = elements.getElement(CardElement);

	async () => {
		try {
			const { data: clientSecret } = await axios.post('/api/payment_intents', {
				amount: price * 100
			});

			const paymentMethodReq = await stripe.createPaymentMethod({
				type: 'card',
				card: cardElement,
				billing_details: billingDetails
			});

			if (paymentMethodReq.error) {
				setCheckoutError(paymentMethodReq.error.message);
				setProcessingTo(false);
				return;
			}

			const { error } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: paymentMethodReq.paymentMethod.id
			});

			if (error) {
				setCheckoutError(error.message);
				setProcessingTo(false);
				return;
			}

			onSuccessfulCheckout();
		} catch (err) {
			setCheckoutError(err.message);
		}
	};

	//CREATE PAYMENT INTENT ON SERVER
	// client_secret of payment

	//need reference to the cardElement
	//need stripe.js
	//create payment method

	const cardElementOptions = {
		style: {
			base: {
				fontSize: '16px',
				color: '#fff',
				'::placeholder': {
					color: '#87bbfd'
				}
			},
			invalid: {
				color: '#FFC7EE',
				iconColor: '#FFC7EE'
			}
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<Row>
				<BillingDetailsFields />
			</Row>
			<Row>
				<CardElementContainer>
					<CardElement options={cardElementOptions} />
				</CardElementContainer>
			</Row>
			{checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
			<Row>
				<SubmitButton disabled={isProcessing}>
					{isProcessing ? 'Processing...' : `Pay $${props.data.price}`}
				</SubmitButton>
			</Row>
		</form>
	);
}
