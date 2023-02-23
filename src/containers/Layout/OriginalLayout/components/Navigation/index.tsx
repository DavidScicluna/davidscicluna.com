import { FC } from 'react';

import { useLocation } from 'react-router';

import { useTheme, InternalLink, Button, Divider, ScaleFade } from '@davidscicluna/component-library';

import { useMediaQuery, VStack, HStack } from '@chakra-ui/react';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { Logo, MailOverlay } from '../../../../../components';
import Socials from '../Socials';

import ColorModeIconButton from './components/ColorModeIconButton';
import NavigationItems from './components/NavigationItems';

const Navigation: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isXs] = useMediaQuery('(max-width: 350px)');
	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
	const [isLg] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

	const location = useLocation();

	const spacing = useSpacing();

	return isMd ? (
		<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={0}>
			<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={0} p={spacing}>
				<InternalLink to='/' isDisabled={location.pathname === '/'}>
					<Logo colorMode={colorMode} isClickable={location.pathname !== '/'} />
				</InternalLink>

				<ColorModeIconButton />
			</HStack>

			<HStack
				width='100%'
				alignItems='center'
				justifyContent={!isXs && isSm ? 'space-between' : 'center'}
				p={spacing}
			>
				<NavigationItems />
				{!isXs && isSm && <Socials />}
			</HStack>
		</VStack>
	) : (
		<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={0} p={spacing}>
			<InternalLink to='/' isDisabled={location.pathname === '/'}>
				<Logo colorMode={colorMode} isClickable={location.pathname !== '/'} />
			</InternalLink>

			<HStack spacing={!isLg && location.pathname !== '/' ? 2 : 0}>
				<NavigationItems />

				{!isLg && (
					<ScaleFade in={location.pathname !== '/'}>
						<MailOverlay>
							<Button color={color} colorMode={colorMode}>
								Get in Touch
							</Button>
						</MailOverlay>
					</ScaleFade>
				)}

				<ColorModeIconButton />
			</HStack>
		</HStack>
	);
};

export default Navigation;
