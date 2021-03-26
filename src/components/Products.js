import React, { useState, useEffect } from 'react';


export default function Products(props){
    const [products, setProducts] = useState([]);

    useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/photos`);
				const data = await response.json();
				await setProducts(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
}