import { FC } from 'react';

import { FontSize, useTheme, DummyButton, Skeleton } from '@davidscicluna/component-library';

import { useMediaQuery, useBreakpointValue, Text, VStack, HStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useSpacing, useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';
import { HomeCSSIcon, HomeHTMLIcon, HomeJSIcon, HomeReactIcon, HomeTSIcon } from '../components';

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

	const { t } = useTranslation();

	return (
		<Page>
			<VStack
				width='100%'
				minHeight='inherit'
				alignItems='flex-start'
				justifyContent='center'
				spacing={spacing * 1.5}
				p={spacing}
			>
				<VStack width='100%' alignItems='flex-start' justifyContent='center' spacing={0.5}>
					<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
						<Text
							align='left'
							fontSize={titleFontSize}
							fontWeight='bold'
							lineHeight='shorter'
							userSelect='none'
						>
							{`${t('home.title1')}`}
						</Text>
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
						<Text
							align='left'
							fontSize={titleFontSize}
							fontWeight='bold'
							lineHeight='shorter'
							userSelect='none'
						>
							{`${t('home.title2')}`}
						</Text>
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
						<Text align='left' fontSize={subtitleFontSize} lineHeight='shorter'>
							{`${t('home.subtitle')}`}
						</Text>
					</Skeleton>
				</VStack>

				<HStack spacing={2}>
					<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
						<HomeHTMLIcon isDummy />
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
						<HomeCSSIcon isDummy />
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
						<HomeJSIcon isDummy />
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
						<HomeTSIcon isDummy />
					</Skeleton>

					<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
						<HomeReactIcon isDummy />
					</Skeleton>
				</HStack>

				<Skeleton color={color} colorMode={colorMode} isLoaded={false} variant='rectangle'>
					<DummyButton color={color} colorMode={colorMode} size={isSm ? 'md' : isMd ? 'lg' : 'xl'}>
						{`${t('home.action')}`}
					</DummyButton>
				</Skeleton>
			</VStack>
		</Page>
	);
};

export default DummyHome;
