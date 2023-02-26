import { useTranslation } from 'react-i18next';

type NavItem = { title: string; location: Partial<Location>; getIsActive: (location: Partial<Location>) => boolean };
type NavItems = NavItem[];

const useGetNavItems = (): NavItems => {
	const { t } = useTranslation();

	return [
		{
			title: `${t('common.navItems./')}`,
			location: { pathname: '/' },
			getIsActive: ({ pathname }) => pathname === '/'
		},
		{
			title: `${t('common.navItems./about')}`,
			location: { pathname: '/about' },
			getIsActive: ({ pathname }) => pathname === '/about'
		},
		{
			title: `${t('common.navItems./projects')}`,
			location: { pathname: '/projects' },
			getIsActive: ({ pathname }) => pathname === '/projects'
		}
	];
};

export default useGetNavItems;
