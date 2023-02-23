import { FC } from 'react';

import { FontSize, useTheme, Button, SlideFade, utils } from '@davidscicluna/component-library';

import { useMediaQuery, useBreakpointValue, useConst, Text, VStack, HStack } from '@chakra-ui/react';

import { Transition } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import { useWindowSize } from 'rooks';

import content from '../../../common/content/home';
import { useSpacing, useUserTheme } from '../../../common/hooks';
import { useLayoutContext } from '../../../containers/Layout/OriginalLayout/common/hooks';
import { HomeCSSIcon, HomeHTMLIcon, HomeJSIcon, HomeReactIcon, HomeTSIcon } from '../components';

const { title, subtitle } = content;

const { getTransitionConfig, getTransitionDuration, getTransitionDelay, getColor, getFontSizeHeight } = utils;

const Home: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const { observe, inView } = useInView({ threshold: 1, unobserveOnEnter: true });

	const titleFontSize = useBreakpointValue<FontSize>({
		base: '2xl',
		sm: '3xl',
		md: '4xl',
		lg: '5xl'
	});
	const subtitleFontSize = useBreakpointValue<FontSize>({
		base: 'sm',
		sm: 'md',
		md: 'lg',
		lg: 'xl'
	});

	const spacing = useSpacing();

	const { height } = useLayoutContext();

	const { innerHeight: windowHeight } = useWindowSize();

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const delay = useConst<number>(getTransitionDelay({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	return (
		<VStack
			ref={observe}
			width='100%'
			minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${height}px)`}
			alignItems='flex-start'
			justifyContent='center'
			spacing={spacing * 1.5}
			p={spacing}
		>
			<VStack width='100%' alignItems='flex-start' justifyContent='center' spacing={0.5}>
				<SlideFade
					in={inView}
					offsetY={getFontSizeHeight({ theme, fontSize: titleFontSize, lineHeight: 'shorter' })}
					transition={{
						enter: { ...config, delay },
						exit: { ...config, delay }
					}}
				>
					<VStack alignItems='flex-start' justifyContent='center' spacing={0}>
						{title.map((t, index) => (
							<Text
								key={index}
								align='left'
								color={getColor({ theme, colorMode, type: 'text.primary' })}
								fontSize={titleFontSize}
								fontWeight='bold'
								lineHeight='shorter'
								userSelect='none'
							>
								{t}
							</Text>
						))}
					</VStack>
				</SlideFade>
				<SlideFade
					in={inView}
					offsetY={getFontSizeHeight({ theme, fontSize: subtitleFontSize, lineHeight: 'shorter' })}
					transition={{
						enter: { ...config, delay: delay * 1.5 },
						exit: { ...config, delay: delay * 1.5 }
					}}
				>
					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.secondary' })}
						fontSize={subtitleFontSize}
						lineHeight='shorter'
						userSelect='none'
					>
						{subtitle}
					</Text>
				</SlideFade>
			</VStack>

			<HStack spacing={2}>
				<SlideFade
					in={inView}
					offsetY={theme.fontSizes['2xl']}
					transition={{
						enter: { ...config, delay: delay * 1.6 },
						exit: { ...config, delay: delay * 1.6 }
					}}
				>
					<HomeHTMLIcon />
				</SlideFade>

				<SlideFade
					in={inView}
					offsetY={theme.fontSizes['2xl']}
					transition={{
						enter: { ...config, delay: delay * 1.7 },
						exit: { ...config, delay: delay * 1.7 }
					}}
				>
					<HomeCSSIcon />
				</SlideFade>

				<SlideFade
					in={inView}
					offsetY={theme.fontSizes['2xl']}
					transition={{
						enter: { ...config, delay: delay * 1.8 },
						exit: { ...config, delay: delay * 1.8 }
					}}
				>
					<HomeJSIcon />
				</SlideFade>

				<SlideFade
					in={inView}
					offsetY={theme.fontSizes['2xl']}
					transition={{
						enter: { ...config, delay: delay * 1.9 },
						exit: { ...config, delay: delay * 1.9 }
					}}
				>
					<HomeTSIcon />
				</SlideFade>

				<SlideFade
					in={inView}
					offsetY={theme.fontSizes['2xl']}
					transition={{
						enter: { ...config, delay: delay * 2 },
						exit: { ...config, delay: delay * 2 }
					}}
				>
					<HomeReactIcon />
				</SlideFade>
			</HStack>

			<SlideFade
				in={inView}
				transition={{
					enter: { ...config, delay: delay * 2.5 },
					exit: { ...config, delay: delay * 2.5 }
				}}
			>
				<Button color={color} colorMode={colorMode} size={isSm ? 'md' : isMd ? 'lg' : 'xl'}>
					Get in touch
				</Button>
			</SlideFade>
		</VStack>
	);
};

export default Home;
