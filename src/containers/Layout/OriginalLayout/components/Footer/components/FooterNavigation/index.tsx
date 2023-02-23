import { FC } from 'react';

import { useLocation } from 'react-router';

import { useTheme, InternalLink } from '@davidscicluna/component-library';

import { useMediaQuery, Stack } from '@chakra-ui/react';

import navItems from '../../../../../../../common/content/navItems';
import { useSpacing, useUserTheme } from '../../../../../../../common/hooks';

const FooterNavigation: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const location = useLocation();

	const spacing = useSpacing();

	return (
		<Stack
			width='100%'
			direction={isSm ? 'column' : 'row'}
			alignItems='center'
			justifyContent='center'
			spacing={spacing}
		>
			{navItems.map(({ title, location: l, getIsActive }) => {
				const isActive = getIsActive(location);
				return (
					<InternalLink
						key={title}
						color={isActive ? color : 'gray'}
						colorMode={colorMode}
						to={{ ...l }}
						isDisabled={isActive}
						isFullWidth={isSm}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',

							fontSize: 'md',
							fontWeight: 'semibold',
							textTransform: 'uppercase',
							textDecoration: 'none !important',
							lineHeight: 'shorter'
						}}
					>
						{title}
					</InternalLink>
				);
			})}
		</Stack>
	);
};

export default FooterNavigation;
