import { FC } from 'react';

import { useTheme, Button, useGetThemeAppearance } from '@davidscicluna/component-library';

import { useMediaQuery, HStack } from '@chakra-ui/react';

import { useGetNavItems } from '@/common/hooks';
import Link from 'next/link';

const NavigationItems: FC = () => {
	const theme = useTheme();

	const { color } = useGetThemeAppearance();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const navItems = useGetNavItems();

	return (
		<HStack spacing={0}>
			{navItems.map(({ title, pathname, getIsActive }) => {
				const isActive = getIsActive(location);
				return (
					<Link key={pathname} href={pathname}>
						<Button
							color={isActive ? color : 'gray'}
							size={isSm ? 'xs' : isMd ? 'sm' : 'md'}
							variant='text'
						>
							{title}
						</Button>
					</Link>
				);
			})}
		</HStack>
	);
};

export default NavigationItems;
