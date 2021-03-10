import Image from 'next/image';
import Link from 'next/link';

import InstagramIcon from '../assets/InstagramIcon';
import FaceBookIcon from '../assets/FacebookIcon';
import TwitterIcon from '../assets/TwitterIcon';

import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div className={footerStyles.footer}>
			<a
				target='_blank'
				href='https://instagram.com/'
				rel='noopener noreferrer'
			>
				<InstagramIcon />
			</a>
			<a target='_blank' href='https://facebook.com/' rel='noopener noreferrer'>
				<TwitterIcon />
			</a>
			<a target='_blank' href='https://twitter.com/' rel='noopener noreferrer'>
				<FaceBookIcon />
			</a>
		</div>
	);
};

export default Footer;
