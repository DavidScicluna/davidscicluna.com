import { FC } from 'react';

import { FontSize, useTheme, DummyButton, Skeleton } from '@davidscicluna/component-library';

import { useMediaQuery, useBreakpointValue, Text, VStack, HStack } from '@chakra-ui/react';

import content from '../../../common/content/home';
import { useSpacing, useUserTheme } from '../../../common/hooks';
import { useDummyLayoutContext } from '../../../containers/Layout/DummyLayout/common/hooks';
import { HomeCSSIcon, HomeHTMLIcon, HomeJSIcon, HomeReactIcon, HomeTSIcon } from '../components';

const { title, subtitle } = content;

const DummyHome: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

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

	const { height } = useDummyLayoutContext();

	return (
		<VStack
			width='100%'
			minHeight={`calc(100vh - ${height}px)`}
			alignItems='flex-start'
			justifyContent='center'
			spacing={spacing * 1.5}
			p={spacing}
		>
			<VStack width='100%' alignItems='flex-start' justifyContent='center' spacing={0.5}>
				{title.map((t, index) => (
					<Skeleton key={index} colorMode={colorMode} isLoaded={false} variant='text'>
						<Text
							align='left'
							fontSize={titleFontSize}
							fontWeight='bold'
							lineHeight='shorter'
							userSelect='none'
						>
							{t}
						</Text>
					</Skeleton>
				))}

				<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
					<Text align='left' fontSize={subtitleFontSize} lineHeight='shorter'>
						{subtitle}
					</Text>
				</Skeleton>
			</VStack>

			<HStack spacing={2}>
				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
					<HomeHTMLIcon />
				</Skeleton>

				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
					<HomeCSSIcon />
				</Skeleton>

				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
					<HomeJSIcon />
				</Skeleton>

				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
					<HomeTSIcon />
				</Skeleton>

				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
					<HomeReactIcon />
				</Skeleton>
			</HStack>

			<Skeleton color={color} colorMode={colorMode} isLoaded={false} variant='rectangle'>
				<DummyButton color={color} colorMode={colorMode} size={isSm ? 'md' : isMd ? 'lg' : 'xl'}>
					Get in touch
				</DummyButton>
			</Skeleton>
		</VStack>
	);
};

export default DummyHome;
