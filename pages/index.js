import Head from 'next/head';
import HomeComponent from '../components/HomeComponent';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Taste Recipes</title>
				<meta name='keywords' content='baking recepies cooking food' />
			</Head>
			<HomeComponent />
		</div>
	);
}
