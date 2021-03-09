import Link from 'next/link';

import dropdownStyes from '../styles/Dropdown.module.css';
const Dropdown = ({ items }) => {
	const DropdownItem = ({ value }) => (
		<Link href={`/recipe/${value}`}>{value}</Link>
	);

	return (
		<div className={dropdownStyes.dropdown}>
			{items.map(item => (
				<DropdownItem value={item} key={item} />
			))}
		</div>
	);
};

export default Dropdown;
