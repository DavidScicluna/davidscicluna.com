import { FC } from 'react';

import { Tooltip, IconButton, IconButtonIcon } from '@davidscicluna/component-library';

import { useBoolean } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';

import { useUserTheme } from '../../../../../../../common/hooks';
import { toggleInternationalizationModal } from '../../../../../../../store/slices/Modals';

const InternationalizationIconButton: FC = () => {
	const { colorMode } = useUserTheme();

	const dispatch = useDispatch();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label='Change Language (tooltip)'
			colorMode={colorMode}
			isOpen={isHovering}
			placement='bottom-end'
			label='Change Language'
		>
			<IconButton
				aria-label='Change Language'
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
