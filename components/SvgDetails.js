import Image from 'next/image';

import SvgDetailsStyles from '../styles/SvgDetails.module.css';

const SvgDetails = ({ iconPath, title, value, svgSize }) => {
	return (
		<div className={SvgDetailsStyles.details}>
			<Image src={iconPath} height={svgSize} width={svgSize} />
			<div>
				<p>{title}</p>
				<span>{value}</span>
			</div>
		</div>
	);
};

export default SvgDetails;
