import React from 'react';
import Header from '../components/Header';

export default function About(props) {
	return (
		<div className="StorePage">
			<Header />
			<div className="about-wrapper">
				<div id="about-photo">
					<img src="https://i.ibb.co/gFkQfCd/30167882-10156307921454641-6297031248368985288-o.jpg" />
				</div>
				<div id="about-text">
					<h4 style={{ textAlign: 'center' }}>
						Alex Belardi is a 27 year old Photographer/Software Developer. At 14
						years old, he found his love for cameras and started writing scripts
						and shooting short films and videos in his spare time. Later, he
						started dabbling with photography and found that he enjoyed it more.
						The many trips Alex took to NYC growing up inspired him through its
						creative energy and helped mold his vision. Today, he focuses mostly
						on shooting landscapes due to his love of the outdoors. His goal is
						to convey the beauty of the world through his lens and encourage
						others to get out and explore.
					</h4>
				</div>
			</div>
		</div>
	);
}
