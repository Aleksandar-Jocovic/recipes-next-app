import Image from 'next/image';

import buttonStyles from '../styles/CustomButton.module.css';

const CustomButton = ({ iconPath, value, svgSize }) => {
	return (
		<button className={buttonStyles.button}>
			<Image src={iconPath} height={svgSize} width={svgSize} />
			<span>{value}</span>
		</button>
	);
};

export default CustomButton;
