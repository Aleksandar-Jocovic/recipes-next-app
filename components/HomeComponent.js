import React from 'react';

import homeComponentStyles from '../styles/HomeComponent.module.css';

const HomeComponent = () => {
	return (
		<div className={homeComponentStyles.home}>
			<div>
				<h2>Healty tasteful recipes</h2>
				<h3>Taste Recipes is great place to find awsome recipes.</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quas
					consequatur nam harum nostrum quam officia dolorum accusamus omnis
					aliquam.
				</p>
			</div>
			<aside>
				<img src='home.jpg' alt='food image' />
			</aside>
		</div>
	);
};

export default HomeComponent;
