import { FC } from 'react';

import { useDebounce } from '@davidscicluna/component-library';

import { useBoolean, Box } from '@chakra-ui/react';

import { HoveringOverlayProps, HoveringOverlayMouseEvent } from './types';

const HoveringOverlay: FC<HoveringOverlayProps> = ({ children, onMouseEnter, onMouseLeave, ...rest }) => {
	const [isHovering, setIsHovering] = useBoolean();
	const isHoveringDebounced = useDebounce(isHovering, 'slow');

	const handleMouseEnter = (event: HoveringOverlayMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: HoveringOverlayMouseEvent): void => {
		setIsHovering.off();

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Box {...rest} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{children(isHoveringDebounced)}
		</Box>
	);
};

export default HoveringOverlay;
