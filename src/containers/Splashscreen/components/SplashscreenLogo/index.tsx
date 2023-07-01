import { FC } from 'react';

import { useConst, useTheme, ScaleFade, utils, useGetColor } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { Transition } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { getTransitionConfig, getTransitionDuration } = utils;

const SplashscreenLogo: FC = () => {
	const theme = useTheme();

	const { t } = useTranslation();

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	const color = useGetColor({ color: 'gray', type: 'text.primary' });

	return (
		<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
			<Text
				align='center'
				color={color}
				fontFamily='Raleway, sans-serif'
				fontSize={['3xl', '4xl', '5xl', '6xl', '7xl', '8xl']}
				fontWeight='bold'
				userSelect='none'
				whiteSpace='nowrap'
				textTransform='lowercase'
				sx={{
					'@keyframes logo-tracking': {
						'0%': {
							letterSpacing: '-0.5em',
							transform: 'translateZ(-700px)',
							opacity: 0
						},
						'50%': { opacity: 0 },
						'100%': { opacity: 1, transform: 'translateZ(0)' }
					},

					'animationName': 'logo-tracking',
					'animationDuration': '2.5s',
					'animationFillMode': 'both',
					'animationTimingFunction': theme.transition.easing['ease-in-out']
				}}
			>
				{`${t('splashscreen.logo')}`}
			</Text>
		</ScaleFade>
	);
};

export default SplashscreenLogo;
