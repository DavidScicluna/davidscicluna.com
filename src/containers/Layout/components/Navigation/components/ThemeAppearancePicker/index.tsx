import { FC } from 'react';

import {
	ButtonGroup,
	ButtonGroupItem,
	ColorSwitcher,
	ColorSwitcherOnChangeProps,
	ColorSwitcherScroll,
	ColorSwitcherScrollItem,
	Divider,
	HoverOverlay,
	Button,
	ButtonIcon,
	IconButton,
	IconButtonIcon,
	Popper,
	Tooltip,
	useGetColor,
	useTheme,
	AppFullColorMode,
	useGetThemeAppearance
} from '@davidscicluna/component-library';

import { Text, VStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import colors from '../../../../../../common/content/colors';
import { useSelector } from '../../../../../../common/hooks';
import { setAppColor, setAppColorMode } from '../../../../../../store/slices/app';

const colorModes: AppFullColorMode[] = ['light', 'system', 'dark'];

const ThemeAppearancePicker: FC = () => {
	const theme = useTheme();

	const { color } = useGetThemeAppearance();

	const { t } = useTranslation();

	const dispatch = useDispatch();
	const appColor = useSelector((state) => state.app.ui.theme.color);
	const appColorMode = useSelector((state) => state.app.ui.theme.colorMode);

	const textPrimaryColor = useGetColor({ color: 'gray', type: 'text.primary' });
	const textSecondaryColor = useGetColor({ color: 'gray', type: 'text.secondary' });

	const handleColorChange = ({ color }: ColorSwitcherOnChangeProps): void => {
		if (color) {
			dispatch(setAppColor(color));
		}
	};

	const handleColorModeChange = (colorMode: AppFullColorMode): void => {
		dispatch(setAppColorMode(colorMode));
	};

	return (
		<Popper
			renderAction={(props) => (
				<IconButton
					{...props}
					aria-label={`${t('layout.themeAppearancePicker.action.aria-label')}`}
					variant='icon'
				>
					<IconButtonIcon icon='edit' />
				</IconButton>
			)}
		>
			<VStack
				width='100%'
				height='100%'
				divider={<Divider />}
				alignItems='stretch'
				justifyContent='stretch'
				spacing={2}
				p={2}
			>
				<Text align='left' color={textPrimaryColor} fontSize='xl' fontWeight='bold'>
					{`${t('layout.themeAppearancePicker.title')}`}
				</Text>

				<VStack width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
					<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
						<Text align='left' color={textPrimaryColor} fontSize='md' fontWeight='semibold'>
							{`${t('layout.themeAppearancePicker.color.title')}`}
						</Text>
						<Text align='left' color={textSecondaryColor} fontSize='xs'>
							{`${t('layout.themeAppearancePicker.color.subtitle')}`}
						</Text>
					</VStack>

					<ColorSwitcher color={appColor} colors={colors} onChange={handleColorChange}>
						<ColorSwitcherScroll
							color='gray'
							renderItem={(props) => (
								<ColorSwitcherScrollItem
									{...props}
									aria-label={`${t(`layout.themeAppearancePicker.color.${color}`)}`}
									width={theme.fontSizes['4xl']}
									height={theme.fontSizes['4xl']}
									borderRadius='base'
									label={`${t(`layout.themeAppearancePicker.color.${color}`)}`}
									placement='top'
								/>
							)}
						/>
					</ColorSwitcher>
				</VStack>

				<VStack width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
					<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
						<Text align='left' color={textPrimaryColor} fontSize='md' fontWeight='semibold'>
							{`${t('layout.themeAppearancePicker.colorMode.title')}`}
						</Text>
						<Text align='left' color={textSecondaryColor} fontSize='xs'>
							{`${t('layout.themeAppearancePicker.colorMode.subtitle')}`}
						</Text>
					</VStack>

					<ButtonGroup>
						{colorModes.map((colorMode, index) => (
							<ButtonGroupItem key={colorMode} index={index} total={colorModes.length}>
								<HoverOverlay>
									{({ isHovering }) => (
										<Tooltip
											aria-label={`${t(
												`layout.themeAppearancePicker.colorMode.${colorMode}.aria-label.tooltip`
											)}`}
											color='gray'
											isOpen={isHovering}
											placement='top'
											label={`${t(
												`layout.themeAppearancePicker.colorMode.${colorMode}.tooltip`
											)}`}
										>
											<Button
												aria-label={`${t(
													`layout.themeAppearancePicker.colorMode.${colorMode}.aria-label.button`
												)}`}
												color={appColorMode === colorMode ? color : 'gray'}
												onClick={
													appColorMode !== colorMode
														? () => handleColorModeChange(colorMode)
														: undefined
												}
												variant='outlined'
											>
												<ButtonIcon
													icon={
														colorMode === 'light'
															? 'light_mode'
															: colorMode === 'dark'
															? 'dark_mode'
															: 'settings'
													}
													category='outlined'
												/>
											</Button>
										</Tooltip>
									)}
								</HoverOverlay>
							</ButtonGroupItem>
						))}
					</ButtonGroup>
				</VStack>
			</VStack>
		</Popper>
	);
};

export default ThemeAppearancePicker;
