import { FC } from 'react';

import { Link } from 'gatsby';

import { useTheme, Button, Divider, ScaleFade } from '@davidscicluna/component-library';

import { useMediaQuery, VStack, HStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useSpacing } from '../../../../common/hooks';
import { Logo, MailOverlay } from '../../../../components';
import Socials from '../Socials';

import InternationalizationIconButton from './components/InternationalizationIconButton';
import NavigationItems from './components/NavigationItems';
import ThemeAppearancePicker from './components/ThemeAppearancePicker';

const Navigation: FC = () => {
	const theme = useTheme();

	const [isXs] = useMediaQuery('(max-width: 350px)');
	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
	const [isLg] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

	const { t } = useTranslation();

	const [spacing] = useSpacing();

	return isMd ? (
		<VStack width='100%' divider={<Divider />} spacing={0}>
			<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={0} p={spacing}>
				<Link to='/'>
					<Logo isClickable={location.pathname !== '/'} />
				</Link>

				<HStack spacing={0}>
					<InternationalizationIconButton />
					<ThemeAppearancePicker />
				</HStack>
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
			<Link to='/'>
				<Logo isClickable={location.pathname !== '/'} />
			</Link>

			<HStack spacing={!isLg && location.pathname !== '/' ? 2 : 0}>
				<NavigationItems />

				{!isLg && (
					<ScaleFade in={location.pathname !== '/'}>
						<MailOverlay>
							<Button>{`${t('layout.navigation.action')}`}</Button>
						</MailOverlay>
					</ScaleFade>
				)}

				<HStack spacing={0}>
					<InternationalizationIconButton />
					<ThemeAppearancePicker />
				</HStack>
			</HStack>
		</HStack>
	);
};

export default Navigation;
