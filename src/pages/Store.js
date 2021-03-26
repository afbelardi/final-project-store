import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Store(props) {
	return (
		<div className="StorePage">
			<Header />
			<main className="product-listings"></main>
		</div>
	);
}
