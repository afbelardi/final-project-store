import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

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
				<img className="show-image" src={showProduct.image} />
			</div>
		</div>
	);
}
