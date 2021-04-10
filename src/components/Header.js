import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Store(props) {
	return (
		<div className="header-container">
			<div className="header">
				<img
					src="https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg"
					alt="skylinemagic"
					border="0"
				/>
				<h1 id="banner-title">AFBELARDI</h1>
				<div id="store-button-div">
					<NavLink to={'/'} style={{ textDecoration: 'none' }}>
						<h2 id="store-button">Store</h2>
					</NavLink>
				</div>
				<div id="about-button-div">
					<NavLink to={'/about'} style={{ textDecoration: 'none' }}>
						<h2 id="about-button">About</h2>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
