import { useState } from 'react';
import Link from 'next/link';

import Submenu from './Submenu';

import navStyles from '../styles/Nav.module.css';

const Nav = () => {
	const [toggleRecepies, setToggleRecepies] = useState(false);

	return (
		<nav className={navStyles.nav}>
			<ul className={navStyles.navList}>
				<li>
					<Link href='/shop'>Home</Link>
				</li>
				<li>
					<button onClick={() => setToggleRecepies(!toggleRecepies)}>
						Recipes
					</button>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
			</ul>
			{toggleRecepies && <Submenu />}
		</nav>
	);
};

export default Nav;
