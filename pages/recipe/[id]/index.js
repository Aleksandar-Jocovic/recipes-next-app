import { useRouter } from 'next/router';
import Recipe from '../../../components/Recipe';

const GetRecipes = ({ recipes }) => {
	// const router = useRouter();
	// const { id } = router.query;
	console.log(recipes);

	return (
		<>
			{recipes.hits.map(item => (
				<Recipe item={item} />
			))}
		</>
	);
};

const APP_ID = '42085afc';
const APP_KEY = 'd46eefed3e35cf6815f1d9e6ae84bc0b';

export const getServerSideProps = async context => {
	const URL = `https://api.edamam.com/search?q=${context.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
	const res = await fetch(URL);
	const recipes = await res.json();
	console.log(recipes);
	return {
		props: {
			recipes
		}
	};
};
export default GetRecipes;
