import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import breadcrumbsStyles from '../styles/Breadcrumbs.module.css';

const Breadcrumbs = () => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState(null);

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split('/');
			linkPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: `/${linkPath.slice(0, i + 1).join('/')}`
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);
	if (!breadcrumbs || breadcrumbs.length < 1) return null;
	return (
		<nav aria-label='breadcrumbs' className={breadcrumbsStyles.breadcrumbNav}>
			<ol>
				{breadcrumbs[0].href === '/' ? null : (
					<li>
						<a href='/'>HOME</a>
					</li>
				)}
				{breadcrumbs.map(item => {
					return (
						<li key={item.href}>
							<Link href={item.href}>
								<a>{item.breadcrumb}</a>
							</Link>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
