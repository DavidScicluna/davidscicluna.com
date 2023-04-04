import { FC } from 'react';

import { useLocation } from 'react-router';

import { useTheme, InternalLink, Divider, utils } from '@davidscicluna/component-library';

import { useMediaQuery, VStack, Text, HStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useSpacing, useUserTheme } from '../../../../common/hooks';
import dayjs from '../../../../common/scripts/dayjs';
import { Logo } from '../../../../components';
import Socials from '../Socials';

import FooterDescription from './components/FooterDescription';
import FooterNavigation from './components/FooterNavigation';

const { getColor } = utils;

const Footer: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const spacing = useSpacing();

	const { t } = useTranslation();

	const location = useLocation();

	return (
		<VStack
			width='100%'
			alignItems='stretch'
			justifyContent='stretch'
			divider={<Divider colorMode={colorMode} />}
			background={getColor({ theme, colorMode, type: colorMode })}
			spacing={spacing}
			p={spacing}
		>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				<InternalLink to='/' isDisabled={location.pathname === '/'}>
					<Logo colorMode={colorMode} isClickable={location.pathname !== '/'} size='sm' />
				</InternalLink>

				<FooterDescription />
			</VStack>

			<FooterNavigation />

			<HStack width='100%' alignItems='center' justifyContent={isSm ? 'center' : 'space-between'} spacing={0}>
				<Text
					align={isSm ? 'center' : 'left'}
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					fontSize='sm'
					fontWeight='medium'
					lineHeight='shorter'
				>
					{`${t('layout.footer.copyright', { year: dayjs(new Date()).format('YYYY') })}`}
				</Text>

				{!isSm && <Socials />}
			</HStack>
		</VStack>
	);
};

export default Footer;
