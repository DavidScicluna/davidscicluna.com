import { FC, useMemo } from 'react';

import {
	FontSize,
	useTheme,
	Image,
	ExternalLink,
	Tooltip,
	Button,
	Badge,
	BadgeIcon,
	BadgeLabel,
	Fade,
	SlideFade,
	utils
} from '@davidscicluna/component-library';

import {
	useMediaQuery,
	useBreakpointValue,
	useBoolean,
	Grid,
	GridItem,
	VStack,
	Stack,
	AspectRatio,
	Text
} from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { darken, lighten, transparentize } from 'color2k';
import { shuffle } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useUpdateEffect } from 'usehooks-ts';

import { inView as defaultInView } from '../../../../../common/data/defaultPropValues';
import { useGetSkills, useGetTransitionMeta, useSpacing, useUserTheme } from '../../../../../common/hooks';
import { Skills } from '../../../../../common/hooks/useGetSkills';
import { setPlaygroundModal } from '../../../../../store/slices/Modals';

import { ProjectProps } from './types';
import { getProjectSkills } from './utils';

const { getColor } = utils;

const transition = 'none';
const limit = 3;

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

	const { i18n, t } = useTranslation();

	const spacing = useSpacing();

	// const navigate = useNavigate();

	const dispatch = useDispatch();

	const allSkills = useGetSkills();

	const { id, image, title, description, links, direction, inView = defaultInView, timeout, status } = props;

	// const [canHover, setCanHover] = useBoolean();

	const canHover = false;

	// const [isDisabled, setIsDisabled] = useBoolean(true);

	const [isProjectActive, setIsProjectActive] = useBoolean();
	const [isHoveringProject, setIsHoveringProject] = useBoolean();

	const [isHoveringSkillsPlus, setIsHoveringSkillsPlus] = useBoolean();

	const skills = useMemo<Skills>(() => shuffle(getProjectSkills({ skills: allSkills, id })), [i18n.language]);

	const [canTriggerAnimation, { delay = 0, ...config }] = useGetTransitionMeta({ timeout });

	// useTimeout(() => setCanHover.on(), timeout * 2);

	useUpdateEffect(() => {
		if (!isHoveringProject && isProjectActive) {
			setIsProjectActive.off();
		}
	}, [isHoveringProject]);

	return (
		<Grid
			data-active={dataAttr(canHover && (isHoveringProject || isProjectActive))}
			width='100%'
			minHeight={isLg ? '500px' : 'auto'}
			templateColumns={['1fr', '1fr', '1fr', '50% 1fr']}
			templateRows={[
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content) minmax(min-content, max-content)',
				'minmax(min-content, max-content)'
			]}
			// onClick={!isDisabled ? () => navigate(`/projects/${id}`) : undefined}
			onMouseEnter={() => setIsHoveringProject.on()}
			onMouseLeave={() => setIsHoveringProject.off()}
			gap={spacing}
			px={spacing}
			py={[spacing, spacing, spacing, spacing * 2]}
			sx={{
				'cursor': canHover ? 'pointer' : 'default',
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
			_hover={
				canHover
					? {
							background:
								colorMode === 'light'
									? darken(getColor({ theme, colorMode, color, type: 'color' }), 0.05)
									: lighten(getColor({ theme, colorMode, color, type: 'color' }), 0.05)
					  }
					: undefined
			}
			_active={
				canHover
					? {
							background:
								colorMode === 'light'
									? darken(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
									: lighten(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
					  }
					: undefined
			}
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
							canHover && (isHoveringProject || isProjectActive) ? 0.9 : 1
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
					{isMd && (status === 'ongoing' || skills.length > 0) && (
						<Stack
							width='100%'
							direction={isLg ? (direction === 'ltr' ? 'row' : 'row-reverse') : 'row'}
							alignItems='center'
							justifyContent='flex-start'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{status === 'ongoing' && (
								<SlideFade
									in={inView && canTriggerAnimation}
									unmountOnExit={false}
									transition={{
										enter: { ...config, delay: delay * 1.5 },
										exit: { ...config, delay: delay * 1.5 }
									}}
								>
									<Badge
										color={
											canHover && (isHoveringProject || isProjectActive)
												? colorMode === 'light'
													? 'white'
													: 'black'
												: 'yellow'
										}
										colorMode={colorMode}
										size='xs'
									>
										<BadgeIcon icon='warning' />
										<BadgeLabel textTransform='uppercase'>{`${t('project.status')}`}</BadgeLabel>
									</Badge>
								</SlideFade>
							)}

							{skills
								.filter((_skill, index) => index < limit)
								.map(({ label }, index) => (
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
												canHover && (isHoveringProject || isProjectActive)
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

							{skills.length > limit && (
								<SlideFade
									in={inView && canTriggerAnimation}
									unmountOnExit={false}
									transition={{
										enter: { ...config, delay: delay * 1.5 * Number(`1.${limit + 1}`) },
										exit: { ...config, delay: delay * 1.5 * Number(`1.${limit + 1}`) }
									}}
								>
									<Tooltip
										aria-label={
											// 	`${t(
											// 	`layout.playgroundModal.fullscreen.${
											// 		isFullscreenEnabled ? 'close' : 'open'
											// 	}.aria-label.tooltip`
											// )}`
											''
										}
										colorMode={colorMode}
										isOpen={isHoveringSkillsPlus}
										placement='top'
										label={skills
											.filter((_skill, index) => index >= limit)
											.map(({ label }) => label)
											.join(', ')}
									>
										<Badge
											color={
												canHover && (isHoveringProject || isProjectActive)
													? colorMode === 'light'
														? 'white'
														: 'black'
													: 'gray'
											}
											colorMode={colorMode}
											onMouseEnter={() => setIsHoveringSkillsPlus.on()}
											onMouseLeave={() => setIsHoveringSkillsPlus.off()}
											size='xs'
											variant={isHoveringSkillsPlus ? 'contained' : 'outlined'}
											sx={{ pointerEvents: 'auto' }}
										>
											<BadgeLabel textTransform='uppercase' sx={{ pointerEvents: 'auto' }}>
												{`+${skills.length - limit}`}
											</BadgeLabel>
										</Badge>
									</Tooltip>
								</SlideFade>
							)}
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
									type:
										canHover && (isHoveringProject || isProjectActive)
											? 'background'
											: 'text.primary'
								})}
								fontSize={titleFontSize}
								fontWeight='bold'
								lineHeight='shorter'
								userSelect='none'
							>
								{title}
							</Text>
						</SlideFade>
						<SlideFade
							in={inView && canTriggerAnimation}
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
									type:
										canHover && (isHoveringProject || isProjectActive)
											? 'background'
											: 'text.secondary'
								})}
								fontSize={descriptionFontSize}
								lineHeight='shorter'
								userSelect='none'
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
							<Button
								color={
									canHover && (isHoveringProject || isProjectActive)
										? colorMode === 'light'
											? 'white'
											: 'black'
										: color
								}
								colorMode={colorMode}
								onClick={
									id !== 'cl' ? () => dispatch(setPlaygroundModal({ isOpen: true, id })) : undefined
								}
								// onMouseEnter={() => setIsDisabled.on()}
								// onMouseLeave={() => setIsDisabled.off()}
								size={isMd ? 'md' : 'xs'}
							>
								{links.playground.label}
							</Button>
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
									color={
										canHover && (isHoveringProject || isProjectActive)
											? colorMode === 'light'
												? 'white'
												: 'black'
											: color
									}
									colorMode={colorMode}
									// onMouseEnter={() => setIsDisabled.on()}
									// onMouseLeave={() => setIsDisabled.off()}
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
