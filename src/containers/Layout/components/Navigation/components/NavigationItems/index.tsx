import { FC } from 'react';

import { useLocation } from 'react-router';

import { useTheme, InternalLink, Button } from '@davidscicluna/component-library';

import { useMediaQuery, HStack } from '@chakra-ui/react';

import { useGetNavItems, useUserTheme } from '../../../../../../common/hooks';

const NavigationItems: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const location = useLocation();

	const navItems = useGetNavItems();

	return (
		<HStack spacing={0}>
			{navItems.map(({ title, location: l, getIsActive }, index) => {
				const isActive = getIsActive(location);
				return (
					<InternalLink key={index} to={{ ...l }} isDisabled={isActive}>
						<Button
							color={isActive ? color : 'gray'}
							colorMode={colorMode}
							size={isSm ? 'xs' : isMd ? 'sm' : 'md'}
							variant='text'
						>
							{title}
						</Button>
					</InternalLink>
				);
			})}
		</HStack>
	);
};

export default NavigationItems;
