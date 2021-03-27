import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products(props) {
	return (
		<main className="product-listings">
			<>
				{Object.keys(props.data).length
					? props.data.map(product => {
							return (
								// <div id="product-card">
								<ul>
									<li>
										<Link to={`/${product._id}`}>
											<img className="product-image" src={product.image} />
											{/* <h3 id="product-title">{product.title}</h3> */}
										</Link>
									</li>
								</ul>
								// </div>
							);
					  })
					: ''}
			</>
		</main>
	);
}
