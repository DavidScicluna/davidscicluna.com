import { FC } from 'react';

import { FontSize, useTheme, Skeleton, DummyButton, Badge, BadgeLabel, utils } from '@davidscicluna/component-library';

import { useMediaQuery, useBreakpointValue, Grid, GridItem, VStack, Stack, AspectRatio, Text } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { Image } from '../../../../../components';

import { DummyProjectProps } from './types';

const { getColor, getFontSizeHeight } = utils;

const tags = range(2, 6);
const descriptions = range(2, 4);

const DummyProject: FC<DummyProjectProps> = (props) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
	const [isLg] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

	const titleFontSize = useBreakpointValue<FontSize>({
		base: 'xl',
		sm: '2xl',
		md: '3xl',
		lg: '3xl'
	});
	const descriptionFontSize = useBreakpointValue<FontSize>({
		base: 'xs',
		sm: 'xs',
		md: 'sm',
		lg: 'sm'
	});

	const spacing = useSpacing();

	const { direction } = props;

	return (
		<Grid
			width='100%'
			minHeight={isLg ? '500px' : 'auto'}
			templateColumns={['1fr', '1fr', '1fr', '50% 1fr']}
			templateRows={[
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content)'
			]}
			background={getColor({ theme, colorMode, type: 'background' })}
			gap={spacing}
			px={spacing}
			py={[spacing, spacing, spacing, spacing * 2]}
		>
			<GridItem order={isLg ? (direction === 'ltr' ? 0 : 1) : 0}>
				<AspectRatio width='100%' height='100%' borderRadius='xl' ratio={16 / 9}>
					<Skeleton colorMode={colorMode} isLoaded={false} variant='rectangle'>
						<Image alt='Dummy Project Poster' width='inherit' height='inherit' borderRadius='xl' src={{}} />
					</Skeleton>
				</AspectRatio>
			</GridItem>

			<GridItem order={isLg ? (direction === 'ltr' ? 1 : 0) : 1}>
				<VStack
					width='100%'
					height='100%'
					alignItems={isLg ? (direction === 'ltr' ? 'flex-start' : 'flex-end') : 'flex-start'}
					justifyContent='center'
					spacing={spacing}
					py={[0, 0, 0, spacing * 2]}
				>
					{isMd && (
						<Stack
							width='100%'
							direction={isLg ? (direction === 'ltr' ? 'row' : 'row-reverse') : 'row'}
							alignItems='center'
							justifyContent='flex-start'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{range(sample(tags) || 4).map((_dummy, index) => (
								<Skeleton key={index} colorMode={colorMode} isLoaded={false} variant='rectangle'>
									<Badge color='gray' colorMode={colorMode} size='xs'>
										<BadgeLabel textTransform='uppercase'>Tag Label</BadgeLabel>
									</Badge>
								</Skeleton>
							))}
						</Stack>
					)}

					<VStack
						width='100%'
						alignItems={isLg ? (direction === 'ltr' ? 'flex-start' : 'flex-end') : 'flex-start'}
						justifyContent='center'
						spacing={0.5}
					>
						<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
							<Text
								align={isLg ? (direction === 'ltr' ? 'left' : 'right') : 'left'}
								fontSize={titleFontSize}
								fontWeight='bold'
								lineHeight='shorter'
							>
								Project Title
							</Text>
						</Skeleton>

						<VStack
							width='100%'
							alignItems={isLg ? (direction === 'ltr' ? 'flex-start' : 'flex-end') : 'flex-start'}
							justifyContent='center'
							spacing={`${getFontSizeHeight({
								theme,
								fontSize: descriptionFontSize,
								lineHeight: 'shorter'
							})}px`}
						>
							{range(sample(descriptions) || 3).map((_dummy, index) => (
								<Skeleton
									key={index}
									width='100%'
									colorMode={colorMode}
									isLoaded={false}
									variant='text'
								>
									<Text
										align={isLg ? (direction === 'ltr' ? 'left' : 'right') : 'left'}
										fontSize={descriptionFontSize}
										lineHeight='shorter'
										noOfLines={3}
									>
										Project Description
									</Text>
								</Skeleton>
							))}
						</VStack>
					</VStack>

					<Stack
						width='100%'
						direction={isLg ? (direction === 'ltr' ? 'row' : 'row-reverse') : 'row'}
						alignItems='center'
						justifyContent='flex-start'
						spacing={0}
					>
						<DummyButton color={color} colorMode={colorMode} size={isMd ? 'md' : 'xs'}>
							Playground Label
						</DummyButton>

						<DummyButton color={color} colorMode={colorMode} size={isMd ? 'md' : 'xs'} variant='text'>
							Github Label
						</DummyButton>
					</Stack>
				</VStack>
			</GridItem>
		</Grid>
	);
};

export default DummyProject;
