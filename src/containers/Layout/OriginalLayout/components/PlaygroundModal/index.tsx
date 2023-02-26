import { FC, useState, useEffect } from 'react';

import {
	Space,
	useTheme,
	Modal,
	ModalStack,
	ModalHeader,
	ModalBody,
	ModalFooter,
	HorizontalScroll,
	Tooltip,
	ExternalLink,
	IconButton,
	IconButtonIcon,
	Button,
	Icon,
	Skeleton,
	DummyButton,
	utils
} from '@davidscicluna/component-library';

import { useBoolean, useConst, HStack, Grid, GridItem, Box, Text, Collapse } from '@chakra-ui/react';

import { Transition, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useFullscreen } from 'rooks';

import projects, { Project, ProjectID } from '../../../../../common/content/projects';
import { useSelector, useUserTheme } from '../../../../../common/hooks';
import { defaultPlaygroundModal, setPlaygroundModal } from '../../../../../store/slices/Modals';

const { getTransitionConfig, getColor } = utils;

const MotionGrid = motion(Grid);

const spacing: Space = 2;

const PlaygroundModal: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const dispatch = useDispatch();
	const { isOpen: isPlaygroundOpen = false, id } = useSelector((state) => state.modals.ui.playgroundModal);

	const [project, setProject] = useState<Project>();
	const [url, setUrl] = useState<string>();

	const [isNavExpanded, setIsNavExpanded] = useBoolean();
	const [isError, setIsError] = useBoolean();

	const [isNavigationTooltip, setIsNavigationTooltip] = useBoolean();
	const [isFullscreenTooltip, setIsFullscreenTooltip] = useBoolean();
	const [isCloseTooltip, setIsCloseTooltip] = useBoolean();

	const { isFullscreenAvailable, isFullscreenEnabled, toggleFullscreen, disableFullscreen } = useFullscreen();

	const config = useConst<Transition>({ ...getTransitionConfig({ theme }) });

	const handleResetState = (): void => {
		setProject(undefined);
		setUrl(undefined);

		setIsError.off();
	};

	const handleClose = (): void => {
		disableFullscreen();

		dispatch(setPlaygroundModal({ ...defaultPlaygroundModal }));

		handleResetState();
	};

	const handleGetProject = (id?: ProjectID): void => {
		handleResetState();

		const project = projects.find(({ id: i }) => i === id);

		if (project) {
			setProject(project);
			setUrl(project.links.web.href);
		} else {
			handleClose();
			// TODO: Open Alert
		}
	};

	useEffect(() => (isPlaygroundOpen ? handleGetProject(id) : undefined), [isPlaygroundOpen]);

	return (
		<Modal colorMode={colorMode} isOpen={isPlaygroundOpen} onClose={handleClose} size='full'>
			<ModalStack>
				<ModalHeader
					renderTitle={(props) => (
						<HStack alignItems='center' justifyContent='space-between' spacing={spacing}>
							<Skeleton colorMode={colorMode} isLoaded={!!project?.title} variant='text'>
								<Text {...props} align='left' fontWeight='bold' lineHeight='shorter' userSelect='none'>
									{project?.title || 'Project Title'}
								</Text>
							</Skeleton>
							{/* {!!project && <PlaygroundNavigationInfo {...pick(project, ['id', 'title'])} />} */}
						</HStack>
					)}
					renderSubtitle={(props) => (
						<Skeleton colorMode={colorMode} isLoaded={!!project?.description} variant='text'>
							<Text {...props} align='left' lineHeight='shorter' userSelect='none'>
								{project?.description || 'Project Description'}
							</Text>
						</Skeleton>
					)}
					renderCancel={({ icon, category, ...rest }) => (
						<HStack spacing={0}>
							<Tooltip
								aria-label={`${isNavExpanded ? 'Close' : 'Open'} Navigation (tooltip)`}
								colorMode={colorMode}
								isOpen={isNavigationTooltip}
								placement='top'
								label={`${isNavExpanded ? 'Close' : 'Open'} Navigation`}
							>
								<IconButton
									{...rest}
									aria-label={`${isNavExpanded ? 'Close' : 'Open'} Navigation`}
									onClick={() => setIsNavExpanded.toggle()}
									onMouseEnter={() => setIsNavigationTooltip.on()}
									onMouseLeave={() => setIsNavigationTooltip.off()}
								>
									<IconButtonIcon icon={isNavExpanded ? 'remove' : 'add'} category={category} />
								</IconButton>
							</Tooltip>
							{isFullscreenAvailable && (
								<Tooltip
									aria-label={`${isFullscreenEnabled ? 'Exit' : 'Open'} Fullscreen (tooltip)`}
									colorMode={colorMode}
									isOpen={isFullscreenTooltip}
									placement='top'
									label={`${isFullscreenEnabled ? 'Exit' : 'Open'} Fullscreen`}
								>
									<IconButton
										{...rest}
										aria-label={`${isFullscreenEnabled ? 'Exit' : 'Open'} Fullscreen`}
										onClick={() => toggleFullscreen()}
										onMouseEnter={() => setIsFullscreenTooltip.on()}
										onMouseLeave={() => setIsFullscreenTooltip.off()}
									>
										<IconButtonIcon
											icon={isFullscreenEnabled ? 'fullscreen_exit' : 'fullscreen'}
											category={category}
										/>
									</IconButton>
								</Tooltip>
							)}
							<Tooltip
								aria-label='Close Playground (tooltip)'
								colorMode={colorMode}
								isOpen={isCloseTooltip}
								placement='top'
								label='Close'
							>
								<IconButton
									{...rest}
									aria-label='Close Playground'
									onMouseEnter={() => setIsCloseTooltip.on()}
									onMouseLeave={() => setIsCloseTooltip.off()}
								>
									<IconButtonIcon icon={icon} category={category} />
								</IconButton>
							</Tooltip>
						</HStack>
					)}
				/>
				<ModalBody sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'stretch' }}>
					<MotionGrid
						width='100%'
						initial={false}
						animate={{
							gridTemplateRows: `${isNavExpanded ? 42 : 0}px 1fr`,
							gridTemplateColumns: '100%',
							gap: isNavExpanded ? theme.space[spacing] : 0
						}}
						transition={{ ...config }}
					>
						<GridItem>
							<Collapse in={isNavExpanded} transition={{ enter: { ...config }, exit: { ...config } }}>
								<HStack width='100%' wrap='wrap' spacing={0} gap={spacing}>
									<HorizontalScroll
										colorMode={colorMode}
										renderDivider={({ padding }) => <Box p={padding} />}
									>
										{projects.map(({ id, title }) => {
											const isActive = id === project?.id;
											return (
												<Button
													key={id}
													color={isActive ? color : 'gray'}
													colorMode={colorMode}
													renderRight={
														isActive
															? ({ color, colorMode, height }) => (
																	<Icon
																		colorMode={colorMode}
																		width={`${height}px`}
																		height={`${height}px`}
																		fontSize={`${height}px`}
																		icon='check'
																		skeletonColor={color}
																	/>
															  )
															: undefined
													}
													onClick={!isActive ? () => handleGetProject(id) : undefined}
													variant={isActive ? 'contained' : 'outlined'}
												>
													{title}
												</Button>
											);
										})}
									</HorizontalScroll>
								</HStack>
							</Collapse>
						</GridItem>
						<GridItem sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'stretch' }}>
							{!isError ? (
								url ? (
									<Box
										as='iframe'
										width='100%'
										borderWidth='2px'
										borderStyle='solid'
										borderColor={getColor({ theme, colorMode, type: 'divider' })}
										borderRadius='base'
										onLoad={() => setIsError.off()}
										onError={() => setIsError.on()}
										src={url}
									/>
								) : (
									<Skeleton width='100%' colorMode={colorMode} isLoaded={false} variant='rectangle' />
								)
							) : (
								<div>Error</div>
							)}
						</GridItem>
					</MotionGrid>
				</ModalBody>
				<ModalFooter
					renderCancel={(props) => <Button {...props}>Cancel</Button>}
					renderAction={(props) =>
						url ? (
							<ExternalLink href={url} target='_blank'>
								<Button {...props} color={color} onClick={handleClose}>
									Open in new tab
								</Button>
							</ExternalLink>
						) : (
							<DummyButton {...props} color={color}>
								Open in new tab
							</DummyButton>
						)
					}
				/>
			</ModalStack>
		</Modal>
	);
};

export default PlaygroundModal;
