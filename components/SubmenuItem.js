import { useState } from 'react';

const SubmenuItem = props => {
	return (
		<li>
			<button>{props.value}</button>
			{true && props.children}
		</li>
	);
};

export default SubmenuItem;
