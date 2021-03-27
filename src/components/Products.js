import React, { useState, useEffect } from 'react';

export default function Products(props) {
	return (
		<main className="product-listings">
			{Object.keys(props.data).length
				? props.data.map(product => {
						return (
							<div id="product-card">
								<img className="product-image" src={product.image} />
								<h3>{product.title}</h3>
							</div>
						);
				  })
				: ''}
		</main>
	);
}
