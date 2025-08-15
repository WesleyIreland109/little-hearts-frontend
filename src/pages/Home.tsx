import React from 'react';
import MainPageLogo from '../assets/Main_Page_Logo.png';

const Home = () => (
	<div style={{ textAlign: 'center', marginTop: '2rem' }}>
			<img
				src={MainPageLogo}
				alt="Little Hearts Main Logo"
				style={{ maxWidth: '350px', width: '100%', marginBottom: '1.5rem' }}
			/>
		<h2>Home</h2>
		<p>Welcome to Little Hearts Foundation!</p>
	</div>
);

export default Home;
