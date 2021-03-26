import React from 'react';
import { Link } from 'react-router-dom';

export default function Store(props) {
	const scrollDown = () => {
		window.scrollBy(0, 300);
	};

	return (
		<div className="header-container">
			<div className="header">
				<img
					src="https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg"
					alt="skylinemagic"
					border="0"
				/>
				<div id="h1">
					<h1>AFBELARDI</h1>
				</div>
				<div id="button">
					<button onClick={scrollDown}>Store</button>
				</div>
			</div>
		</div>
	);
}
