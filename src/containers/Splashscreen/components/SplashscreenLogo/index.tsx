import { FC } from 'react';

import { useTheme, ScaleFade, utils } from '@davidscicluna/component-library';

import { useConst, Text } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useUserTheme } from '../../../../common/hooks';

const { getTransitionConfig, getTransitionDuration, getColor } = utils;

const SplashscreenLogo: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	return (
		<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
			<Text
				align='center'
				color={getColor({ theme, colorMode, type: 'text.primary' })}
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
				davidscicluna
			</Text>
		</ScaleFade>
	);
};

export default SplashscreenLogo;
