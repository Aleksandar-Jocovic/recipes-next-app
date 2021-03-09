import Nav from './Nav';
import Breadcrumbs from './Breadcrumbs';

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />

			<Breadcrumbs />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
