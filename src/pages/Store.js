import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Store(props) {
	return (
		<div className="StorePage">
			<div className="store-container">
				<Header />
				<a href=".product-listings">Store</a>
			</div>
			<main className="product-listings"></main>
		</div>
	);
}
