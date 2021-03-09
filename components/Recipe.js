import SvgDetails from './SvgDetails';
import CustomButton from './CustomButton';

import recipeStyles from '../styles/Recipe.module.css';

const Recipe = ({ item }) => {
	const { ingredientLines, image, totalTime, label } = item.recipe;
	const servings = item.recipe.yield;

	const formatTime = () => {
		if (totalTime <= 60) return `${totalTime} min`;
		const decimal = (totalTime / 60).toFixed(2);
		console.log(decimal);
		const hours = Math.floor(decimal);
		const mins = Math.floor((decimal - hours) * 60);
		return `${hours} hr ${mins} min`;
	};

	return (
		<div className={recipeStyles.container} key={item.recipe.label}>
			<div className={recipeStyles.info}>
				<h2>{label}</h2>
				<ul>
					{ingredientLines.map(ingredient => (
						<li>- {ingredient}</li>
					))}
				</ul>

				<div className={recipeStyles.detailsContainer}>
					<SvgDetails
						iconPath='/clock.svg'
						title='time'
						value={formatTime()}
						svgSize={30}
					/>
					<SvgDetails
						iconPath='/plate.svg'
						title='yield'
						value={`${servings} servings`}
						svgSize={30}
					/>
				</div>
				<div className={recipeStyles.buttonsContainer}>
					<CustomButton
						iconPath={'/add.svg'}
						value={'save recipe'}
						svgSize={15}
					/>
					<CustomButton
						iconPath={'/printer.svg'}
						value={'print recipe'}
						svgSize={15}
					/>
				</div>
			</div>
			<img src={image} className={recipeStyles.foodImage} />
		</div>
	);
};

export default Recipe;
