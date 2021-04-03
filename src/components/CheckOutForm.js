import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Row from './prebuilt/Row';
import BillingDetailsFields from './prebuilt/BillingDetailsFields';
import SubmitButton from './prebuilt/SubmitButton';
import CheckoutError from './prebuilt/CheckoutError';

import { CardElement } from '@stripe/react-stripe-js';

const CardElementContainer = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	& .StripeElement {
		width: 100%;
		padding: 15px;
	}
`;

export default function CheckOutForm(props) {
	const [isProcessing, setProcessingTo] = useState(false);
	const [checkoutError, setCheckoutError] = useState();
	const [showProduct, setShowProduct] = useState({});

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

	return (
		<form onSubmit={handleFormSubmit}>
			<Row>
				<BillingDetailsFields />
			</Row>
			<Row>
				<CardElementContainer>
					<CardElement />
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
