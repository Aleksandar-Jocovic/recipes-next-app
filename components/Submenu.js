import Link from 'next/link';

import SubmenuItem from './SubmenuItem';
import Dropdown from './Dropdown';

import submenuStyles from '../styles/Submenu.module.css';

const Submenu = () => {
	const categories = ['breakfast', 'lunch', 'dinner', 'bread', 'desert'];
	const collections = ['pasta', 'bacon', 'eggs', 'milk', 'olives'];

	return (
		<div className={submenuStyles.subMenu}>
			<ul className={submenuStyles.subList}>
				<SubmenuItem value='categories'>
					<Dropdown items={categories} />
				</SubmenuItem>
				<SubmenuItem value='collections'>
					<Dropdown items={collections} />
				</SubmenuItem>
			</ul>
		</div>
	);
};

export default Submenu;
