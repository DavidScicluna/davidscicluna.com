import { FC } from 'react';

import { useNavigate } from 'react-router';

import {
	FontSize,
	useTheme,
	ExternalLink,
	Button,
	Badge,
	BadgeLabel,
	Fade,
	SlideFade,
	utils
} from '@davidscicluna/component-library';

import {
	useMediaQuery,
	useBreakpointValue,
	useBoolean,
	useConst,
	Grid,
	GridItem,
	VStack,
	Stack,
	AspectRatio,
	Text
} from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { darken, lighten, transparentize } from 'color2k';
import { Transition } from 'framer-motion';
import { useTimeout, useUpdateEffect } from 'usehooks-ts';

import { inView as defaultInView } from '../../../../../common/data/defaultPropValues';
import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { Image } from '../../../../../components';

import { ProjectProps } from './types';

const { getTransitionConfig, getTransitionDuration, getTransitionDelay, getColor, getFontSizeHeight } = utils;

const transition = 'none';

const Project: FC<ProjectProps> = (props) => {
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

	const navigate = useNavigate();

	const { id, image, title, description, links, tags, direction, inView = defaultInView, timeout } = props;

	const [canTriggerAnimation, setCanTriggerAnimation] = useBoolean();

	const [isDisabled, setIsDisabled] = useBoolean();

	const [isActive, setIsActive] = useBoolean();
	const [isHovering, setIsHovering] = useBoolean();

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const delay = useConst<number>(getTransitionDelay({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	useTimeout(() => setCanTriggerAnimation.on(), timeout);

	useUpdateEffect(() => (!isHovering && isActive ? setIsActive.off() : undefined), [isHovering]);

	return (
		<Grid
			data-active={dataAttr(isHovering || isActive)}
			width='100%'
			minHeight={isLg ? '500px' : 'auto'}
			templateColumns={['1fr', '1fr', '1fr', '50% 1fr']}
			templateRows={[
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content)'
			]}
			onClick={!isDisabled ? () => navigate(`/projects/${id}`) : undefined}
			onMouseEnter={() => setIsHovering.on()}
			onMouseLeave={() => setIsHovering.off()}
			gap={spacing}
			px={spacing}
			py={[spacing, spacing, spacing, spacing * 2]}
			sx={{
				'cursor': 'pointer',
				'background': getColor({ theme, colorMode, type: 'background' }),

				'transition': transition,
				'transitionProperty': transition,
				'transitionDuration': transition,
				'transitionTimingFunction': transition,

				'& *': {
					transition: transition,
					transitionProperty: transition,
					transitionDuration: transition,
					transitionTimingFunctio: transition
				}
			}}
			_hover={{
				background:
					colorMode === 'light'
						? darken(getColor({ theme, colorMode, color, type: 'color' }), 0.05)
						: lighten(getColor({ theme, colorMode, color, type: 'color' }), 0.05)
			}}
			_active={{
				background:
					colorMode === 'light'
						? darken(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
						: lighten(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
			}}
		>
			<GridItem order={isLg ? (direction === 'ltr' ? 0 : 1) : 0}>
				<Fade
					in={inView && canTriggerAnimation}
					unmountOnExit={false}
					transition={{
						enter: { ...config, delay },
						exit: { ...config, delay }
					}}
					style={{
						width: '100%',
						height: '100%',
						position: 'relative',
						borderRadius: theme.radii.xl,
						boxShadow: `0px 16px 20px ${transparentize(
							getColor({ theme, colorMode, type: 'divider' }),
							isHovering || isActive ? 0.9 : 1
						)}`
					}}
				>
					<AspectRatio width='100%' height='100%' borderRadius='xl' ratio={16 / 9}>
						<Image
							alt={`${title} Poster`}
							width='inherit'
							height='inherit'
							borderRadius='xl'
							src={{ ...image }}
						/>
					</AspectRatio>
				</Fade>
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
					{isMd && tags.length > 0 && (
						<Stack
							width='100%'
							direction={isLg ? (direction === 'ltr' ? 'row' : 'row-reverse') : 'row'}
							alignItems='center'
							justifyContent='flex-start'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{tags.map(({ label }, index) => (
								<SlideFade
									key={label}
									in={inView && canTriggerAnimation}
									unmountOnExit={false}
									transition={{
										enter: { ...config, delay: delay * 1.5 * Number(`1.${index + 1}`) },
										exit: { ...config, delay: delay * 1.5 * Number(`1.${index + 1}`) }
									}}
								>
									<Badge
										color={
											isHovering || isActive
												? colorMode === 'light'
													? 'white'
													: 'black'
												: 'gray'
										}
										colorMode={colorMode}
										size='xs'
									>
										<BadgeLabel textTransform='uppercase'>{label}</BadgeLabel>
									</Badge>
								</SlideFade>
							))}
						</Stack>
					)}

					<VStack
						width='100%'
						alignItems={isLg ? (direction === 'ltr' ? 'flex-start' : 'flex-end') : 'flex-start'}
						justifyContent='center'
						spacing={0.5}
					>
						<SlideFade
							in={inView && canTriggerAnimation}
							offsetY={`${getFontSizeHeight({
								theme,
								fontSize: titleFontSize,
								lineHeight: 'shorter'
							})}px`}
							unmountOnExit={false}
							transition={{
								enter: { ...config, delay: delay * 2 },
								exit: { ...config, delay: delay * 2 }
							}}
						>
							<Text
								align={isLg ? (direction === 'ltr' ? 'left' : 'right') : 'left'}
								color={getColor({
									theme,
									colorMode,
									type: isHovering || isActive ? 'background' : 'text.primary'
								})}
								fontSize={titleFontSize}
								fontWeight='bold'
								lineHeight='shorter'
							>
								{title}
							</Text>
						</SlideFade>
						<SlideFade
							in={inView && canTriggerAnimation}
							offsetY={`${getFontSizeHeight({
								theme,
								fontSize: descriptionFontSize,
								lineHeight: 'shorter'
							})}px`}
							unmountOnExit={false}
							transition={{
								enter: { ...config, delay: delay * 2.1 },
								exit: { ...config, delay: delay * 2.1 }
							}}
						>
							<Text
								align={isLg ? (direction === 'ltr' ? 'left' : 'right') : 'left'}
								color={getColor({
									theme,
									colorMode,
									type: isHovering || isActive ? 'background' : 'text.secondary'
								})}
								fontSize={descriptionFontSize}
								lineHeight='shorter'
								noOfLines={3}
							>
								{description}
							</Text>
						</SlideFade>
					</VStack>

					<Stack
						width='100%'
						direction={isLg ? (direction === 'ltr' ? 'row' : 'row-reverse') : 'row'}
						alignItems='center'
						justifyContent='flex-start'
						spacing={0}
					>
						<SlideFade
							in={inView && canTriggerAnimation}
							unmountOnExit={false}
							transition={{
								enter: { ...config, delay: delay * 2.5 },
								exit: { ...config, delay: delay * 2.5 }
							}}
						>
							<ExternalLink href={links.web.href} target='_blank'>
								<Button
									color={isHovering || isActive ? (colorMode === 'light' ? 'white' : 'black') : color}
									colorMode={colorMode}
									onMouseEnter={() => setIsDisabled.on()}
									onMouseLeave={() => setIsDisabled.off()}
									size={isMd ? 'md' : 'xs'}
								>
									{links.web.label}
								</Button>
							</ExternalLink>
						</SlideFade>
						<SlideFade
							in={inView && canTriggerAnimation}
							unmountOnExit={false}
							transition={{
								enter: { ...config, delay: delay * 2.6 },
								exit: { ...config, delay: delay * 2.6 }
							}}
						>
							<ExternalLink href={links.git.href} target='_blank'>
								<Button
									color={isHovering || isActive ? (colorMode === 'light' ? 'white' : 'black') : color}
									colorMode={colorMode}
									onMouseEnter={() => setIsDisabled.on()}
									onMouseLeave={() => setIsDisabled.off()}
									size={isMd ? 'md' : 'xs'}
									variant='text'
								>
									{links.git.label}
								</Button>
							</ExternalLink>
						</SlideFade>
					</Stack>
				</VStack>
			</GridItem>
		</Grid>
	);
};

export default Project;
