import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

type NavItem = { title: string; pathname: string; getIsActive: (location: Partial<Location>) => boolean };
type NavItems = NavItem[];

const useGetNavItems = (): NavItems => {
	const { i18n, t } = useTranslation();

	const navItems = useMemo<NavItems>(() => {
		return [
			{
				title: `${t('common.navItems./')}`,
				pathname: '/',
				getIsActive: ({ pathname }) => pathname === '/'
			},
			{
				title: `${t('common.navItems./about')}`,
				pathname: '/about',
				getIsActive: ({ pathname }) => pathname === '/about'
			},
			{
				title: `${t('common.navItems./projects')}`,
				pathname: '/projects',
				getIsActive: ({ pathname }) => pathname === '/projects'
			}
		];
	}, [i18n.language]);

	return navItems;
};

export default useGetNavItems;
