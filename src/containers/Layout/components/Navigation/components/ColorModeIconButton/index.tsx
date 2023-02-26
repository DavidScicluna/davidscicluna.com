import { FC } from 'react';

import { Tooltip, IconButton, IconButtonIcon } from '@davidscicluna/component-library';

import { useBoolean } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useUserTheme } from '../../../../../../common/hooks';
import { setColorMode } from '../../../../../../store/slices/App';

const ColorModeIconButton: FC = () => {
	const { colorMode } = useUserTheme();

	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label={`${t(`layout.navigation.colorModeIconButton.${colorMode}.aria-label.tooltip`)}`}
			colorMode={colorMode}
			isOpen={isHovering}
			placement='bottom-end'
			label={`${t(`layout.navigation.colorModeIconButton.${colorMode}.tooltip`)}`}
		>
			<IconButton
				aria-label={`${t(`layout.navigation.colorModeIconButton.${colorMode}.aria-label.button`)}`}
				color={colorMode === 'light' ? 'black' : 'white'}
				colorMode={colorMode}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				onClick={() => dispatch(setColorMode(colorMode === 'light' ? 'dark' : 'light'))}
				variant='icon'
			>
				<IconButtonIcon
					icon='contrast'
					category='outlined'
					sx={{ transform: `rotate(${colorMode === 'light' ? 180 : 0}deg)` }}
				/>
			</IconButton>
		</Tooltip>
	);
};

export default ColorModeIconButton;
