import { FC } from 'react';

import { Tooltip, IconButton, IconButtonIcon } from '@davidscicluna/component-library';

import { useBoolean } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useUserTheme } from '../../../../../../../common/hooks';
import { toggleInternationalizationModal } from '../../../../../../../store/slices/Modals';

const InternationalizationIconButton: FC = () => {
	const { colorMode } = useUserTheme();

	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label={`${t('layout.navigation.internationalizationIconButton.aria-label.tooltip')}`}
			colorMode={colorMode}
			isOpen={isHovering}
			placement='bottom-end'
			label={`${t('layout.navigation.internationalizationIconButton.tooltip')}`}
		>
			<IconButton
				aria-label={`${t('layout.navigation.internationalizationIconButton.aria-label.button')}`}
				color={colorMode === 'light' ? 'black' : 'white'}
				colorMode={colorMode}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				onClick={() => dispatch(toggleInternationalizationModal(true))}
				variant='icon'
			>
				<IconButtonIcon icon='language' category='outlined' />
			</IconButton>
		</Tooltip>
	);
};

export default InternationalizationIconButton;
