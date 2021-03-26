import React, { useState, useEffect } from 'react';

export default function Products(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos`);
				const data = await response.json();
				await setProducts(data.data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<main className="product-listings">
			{Object.keys(props.data).length
				? props.data.map(product => {
						return (
							<div id="product-card">
								<img src={product.image} />
								<h3>{product.title}</h3>
							</div>
						);
				  })
				: ''}
		</main>
	);
}
