import React from 'react';
import { Link } from 'react-router-dom';

export default function Store(props) {
	const scrollDown = () => {
		window.scrollBy(0, 600);
	};

	return (
		<div className="header-container">
			<div className="header">
				<img
					src="https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg"
					alt="skylinemagic"
					border="0"
				/>
				<h1 id="banner-title">AFBELARDI</h1>
				<Link to={'/'}>
					<button className="nav">Store</button>
				</Link>
				<Link to={'/about'}>
					<button className="nav">About</button>
				</Link>
			</div>
		</div>
	);
}
