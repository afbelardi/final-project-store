import React from 'react';
import Header from '../components/Header';

export default function Success(props) {
	return (
		<div className="StorePage">
			<div className="show-wrapper">
				<Header />
				<div id="success">
					<h1 id="success-text">
						Order was Successful! Thank you for supporting! Check your email for
						a receipt.{' '}
					</h1>
				</div>
			</div>
		</div>
	);
}
