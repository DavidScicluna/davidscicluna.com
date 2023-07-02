import { FC } from 'react';

import { useTheme, Divider, useGetColor, useGetThemeAppearance } from '@davidscicluna/component-library';

import { useMediaQuery, VStack, Text, HStack } from '@chakra-ui/react';

import { useSpacing } from '@/common/hooks';
import dayjs from '@/common/scripts/dayjs';
import { Logo } from '@/components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Socials from '../Socials';

import FooterDescription from './components/FooterDescription';
import FooterNavigation from './components/FooterNavigation';

const Footer: FC = () => {
	const theme = useTheme();

	const { colorMode } = useGetThemeAppearance();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const backgroundColor = useGetColor({ color: 'gray', type: colorMode });
	const textColor = useGetColor({ color: 'gray', type: 'text.secondary' });

	const [spacing] = useSpacing();

	return (
		<VStack
			width='100%'
			alignItems='stretch'
			justifyContent='stretch'
			divider={<Divider />}
			background={backgroundColor}
			spacing={spacing}
			p={spacing}
		>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				<Link href='/'>
					<Logo isClickable={location.pathname !== '/'} size='sm' />
				</Link>

				<FooterDescription />
			</VStack>

			<FooterNavigation />

			<HStack width='100%' alignItems='center' justifyContent={isSm ? 'center' : 'space-between'} spacing={0}>
				<Text
					align={isSm ? 'center' : 'left'}
					color={textColor}
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
