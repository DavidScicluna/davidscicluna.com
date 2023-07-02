import { FC } from 'react';

import { useTheme, Button, useGetThemeAppearance } from '@davidscicluna/component-library';

import { useMediaQuery, Stack } from '@chakra-ui/react';

import { useGetNavItems, useSpacing } from '@/common/hooks';
import Link from 'next/link';

const FooterNavigation: FC = () => {
	const theme = useTheme();

	const { color } = useGetThemeAppearance();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const [spacing] = useSpacing();

	const navItems = useGetNavItems();

	return (
		<Stack
			width='100%'
			direction={isSm ? 'column' : 'row'}
			alignItems='center'
			justifyContent='center'
			spacing={spacing}
		>
			{navItems.map(({ title, pathname, getIsActive }) => {
				const isActive = getIsActive(globalThis.window.location);
				return (
					<Link key={pathname} href={pathname}>
						<Button
							color={isActive ? color : 'gray'}
							isCompact
							isDisabled={isActive}
							isFullWidth={isSm}
							variant='text'
						>
							{title}
						</Button>
					</Link>
				);
			})}
		</Stack>
	);
};

export default FooterNavigation;
