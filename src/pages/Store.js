import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Products from '../components/Products';

// import GlobalStyles from '../components/prebuilt/GlobalStyles';

export default function Store(props) {
	const [products, setProducts] = useState([]);


	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos`);
				const data = await response.json();
				await setProducts(data);
				// console.log(PUBLISHABLE_KEY);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<>
			<div className="StorePage">
				<Header />
				<h1 id="store-title">STORE</h1>
				<Products data={products} />
			</div>
		</>
	);
}
