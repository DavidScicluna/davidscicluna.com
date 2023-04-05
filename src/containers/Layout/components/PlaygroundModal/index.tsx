import { FC, useState, useEffect } from 'react';

import {
	Space,
	CloseIconButtonIconType,
	useTheme,
	Modal,
	ModalStack,
	ModalHeader,
	ModalBody,
	ModalFooter,
	StateLabel,
	StateLabelStack,
	StateLabelIcon,
	StateLabelBody,
	StateLabelTitle,
	StateLabelSubtitle,
	StateLabelActions,
	Alert,
	HorizontalScroll,
	Tooltip,
	ExternalLink,
	IconButton,
	IconButtonIcon,
	Button,
	CloseIconButton,
	Icon,
	Skeleton,
	DummyButton,
	utils
} from '@davidscicluna/component-library';

import {
	useMediaQuery,
	useToast,
	useBoolean,
	useConst,
	HStack,
	Grid,
	GridItem,
	Box,
	Text,
	Collapse
} from '@chakra-ui/react';

import { Transition, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFullscreen } from 'rooks';

import { useGetProjects, useSelector, useUserTheme } from '../../../../common/hooks';
import { Project, ProjectID } from '../../../../common/hooks/useGetProjects';
import { defaultPlaygroundModal, setPlaygroundModal } from '../../../../store/slices/Modals';

const { getTransitionConfig, getColor } = utils;

const MotionGrid = motion(Grid);

const spacing: Space = 2;

const toastID = 'ds-layout-playground-modal-toast';

const PlaygroundModal: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const dispatch = useDispatch();
	const { isOpen: isPlaygroundOpen = false, id } = useSelector((state) => state.modals.ui.playgroundModal);

	const toast = useToast();

	const projects = useGetProjects();

	const [project, setProject] = useState<Project>();
	const [url, setUrl] = useState<string>();

	const [isNavExpanded, setIsNavExpanded] = useBoolean();
	const [isError, setIsError] = useBoolean();

	const [isHoveringNavigation, setIsHoveringNavigation] = useBoolean();
	const [isHoveringFullscreen, setIsHoveringFullscreen] = useBoolean();

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

			if (!toast.isActive(toastID)) {
				toast({
					id: toastID,
					// duration: convertDurationToMS({ duration: 15 }),
					duration: 15000,
					position: 'bottom-left',
					render: () => (
						<Alert
							duration={15}
							title={`${t('layout.playgroundModal.error.title')}`}
							description={`${t('layout.playgroundModal.error.subtitle', {
								project: t('layout.playgroundModal.error.project')
							})}`}
							status='error'
							onClose={() => toast.close(toastID)}
						/>
					)
				});
			}
		}
	};

	useEffect(() => (isPlaygroundOpen ? handleGetProject(id) : undefined), [isPlaygroundOpen]);

	return (
		<Modal colorMode={colorMode} isOpen={isPlaygroundOpen} onClose={handleClose} size='full'>
			<ModalStack>
				<ModalHeader
					renderTitle={(props) => (
						<Skeleton colorMode={colorMode} isLoaded={!!project?.title} variant='text'>
							<Text {...props} align='left' fontWeight='bold' lineHeight='shorter' userSelect='none'>
								{project?.title || `${t('layout.playgroundModal.title')}`}
							</Text>
						</Skeleton>
					)}
					renderSubtitle={(props) => (
						<Skeleton colorMode={colorMode} isLoaded={!!project?.description} variant='text'>
							<Text {...props} align='left' lineHeight='shorter' userSelect='none'>
								{project?.description || `${t('layout.playgroundModal.subtitle')}`}
							</Text>
						</Skeleton>
					)}
					renderCancel={({ icon, category, ...rest }) => (
						<HStack spacing={0}>
							<Tooltip
								aria-label={`${t(
									`layout.playgroundModal.navigation.${
										isNavExpanded ? 'close' : 'open'
									}.aria-label.tooltip`
								)}`}
								colorMode={colorMode}
								isOpen={isHoveringNavigation}
								placement='top'
								label={`${t(
									`layout.playgroundModal.navigation.${isNavExpanded ? 'close' : 'open'}.tooltip`
								)}`}
							>
								<IconButton
									{...rest}
									aria-label={`${t(
										`layout.playgroundModal.navigation.${
											isNavExpanded ? 'close' : 'open'
										}.aria-label.button`
									)}`}
									onClick={() => setIsNavExpanded.toggle()}
									onMouseEnter={() => setIsHoveringNavigation.on()}
									onMouseLeave={() => setIsHoveringNavigation.off()}
								>
									<IconButtonIcon icon={isNavExpanded ? 'remove' : 'add'} category={category} />
								</IconButton>
							</Tooltip>
							{isFullscreenAvailable && (
								<Tooltip
									aria-label={`${t(
										`layout.playgroundModal.fullscreen.${
											isFullscreenEnabled ? 'close' : 'open'
										}.aria-label.tooltip`
									)}`}
									colorMode={colorMode}
									isOpen={isHoveringFullscreen}
									placement='top'
									label={`${t(
										`layout.playgroundModal.fullscreen.${
											isFullscreenEnabled ? 'close' : 'open'
										}.tooltip`
									)}`}
								>
									<IconButton
										{...rest}
										aria-label={`${t(
											`layout.playgroundModal.fullscreen.${
												isFullscreenEnabled ? 'close' : 'open'
											}.aria-label.button`
										)}`}
										onClick={() => toggleFullscreen()}
										onMouseEnter={() => setIsHoveringFullscreen.on()}
										onMouseLeave={() => setIsHoveringFullscreen.off()}
									>
										<IconButtonIcon
											icon={isFullscreenEnabled ? 'fullscreen_exit' : 'fullscreen'}
											category={category}
										/>
									</IconButton>
								</Tooltip>
							)}
							<CloseIconButton
								{...rest}
								aria-label={`${t('layout.playgroundModal.close.aria-label')}`}
								colorMode={colorMode}
								placement='top'
								label={`${t('layout.playgroundModal.close.tooltip')}`}
								icon={icon as CloseIconButtonIconType}
								category={category}
							/>
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
										{projects.map(({ id, title, short }) => {
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
													{id === 'edb' ? short : title}
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
								<StateLabel
									width='100%'
									height='100%'
									color='red'
									colorMode={colorMode}
									borderRadius='base'
									borderWidth='2px'
									borderStyle='dashed'
									borderColor={getColor({ theme, colorMode, type: 'divider' })}
								>
									<StateLabelStack
										width='100%'
										height='100%'
										alignItems='center'
										justifyContent='center'
										p={0}
									>
										<StateLabelIcon
											width={theme.fontSizes['8xl']}
											height={theme.fontSizes['8xl']}
											fontSize={theme.fontSizes['6xl']}
											icon='close'
											p={2}
										/>

										<StateLabelBody>
											<StateLabelTitle
												fontSize={['xl', '4xl']}
												textTransform='capitalize'
												noOfLines={0}
											>
												{t('layout.playgroundModal.error.title')}
											</StateLabelTitle>
											<StateLabelSubtitle fontSize={['xs', 'lg']}>
												{t('layout.playgroundModal.error.subtitle', {
													project:
														project && project?.title
															? `"${project.title}"`
															: t('layout.playgroundModal.error.project')
												})}
											</StateLabelSubtitle>
										</StateLabelBody>

										<StateLabelActions
											renderActions={(props) => (
												<Button
													{...props}
													isFullWidth={isSm}
													onClick={handleClose}
													size={isSm ? 'md' : 'xl'}
												>
													{`${t('layout.playgroundModal.error.action')}`}
												</Button>
											)}
										/>
									</StateLabelStack>
								</StateLabel>
							)}
						</GridItem>
					</MotionGrid>
				</ModalBody>
				<ModalFooter
					renderCancel={(props) => <Button {...props}>{`${t('layout.playgroundModal.cancel')}`}</Button>}
					renderAction={(props) =>
						url ? (
							<ExternalLink href={url} target='_blank' isFullWidth={isSm}>
								<Button {...props} color={color} isDisabled={!project} onClick={handleClose}>
									{`${t('layout.playgroundModal.action')}`}
								</Button>
							</ExternalLink>
						) : (
							<DummyButton {...props} color={color}>
								{`${t('layout.playgroundModal.action')}`}
							</DummyButton>
						)
					}
				/>
			</ModalStack>
		</Modal>
	);
};

export default PlaygroundModal;
