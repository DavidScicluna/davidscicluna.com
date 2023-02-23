import { FC } from 'react';

import { useLocation } from 'react-router';

import { useTheme, InternalLink, Divider, utils } from '@davidscicluna/component-library';

import { useMediaQuery, VStack, Text, HStack } from '@chakra-ui/react';

import dayjs from 'dayjs';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { Logo } from '../../../../../components';
import Socials from '../Socials';

import FooterDescription from './components/FooterDescription';
import FooterNavigation from './components/FooterNavigation';

const { getColor } = utils;

const Footer: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const location = useLocation();

	const spacing = useSpacing();

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
					{`© ${dayjs(new Date()).format('YYYY')} David Scicluna, All rights reserved.`}
				</Text>

				{!isSm && <Socials />}
			</HStack>
		</VStack>
	);
};

export default Footer;
