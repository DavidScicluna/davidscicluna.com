import { FC } from 'react';

import {
	Tooltip,
	IconButton,
	IconButtonIcon,
	HoverOverlay,
	useGetThemeAppearance
} from '@davidscicluna/component-library';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { toggleInternationalizationModal } from '../../../../../../store/slices/Modals';

const InternationalizationIconButton: FC = () => {
	const { colorMode } = useGetThemeAppearance();

	const dispatch = useDispatch();

	const { t } = useTranslation();

	return (
		<HoverOverlay>
			{({ isHovering }) => (
				<Tooltip
					aria-label={`${t('layout.navigation.internationalizationIconButton.aria-label.tooltip')}`}
					color='gray'
					isOpen={isHovering}
					placement='bottom-end'
					label={`${t('layout.navigation.internationalizationIconButton.tooltip')}`}
				>
					<IconButton
						aria-label={`${t('layout.navigation.internationalizationIconButton.aria-label.button')}`}
						color={colorMode === 'light' ? 'black' : 'white'}
						onClick={() => dispatch(toggleInternationalizationModal(true))}
						variant='icon'
					>
						<IconButtonIcon icon='language' category='outlined' />
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
};

export default InternationalizationIconButton;
