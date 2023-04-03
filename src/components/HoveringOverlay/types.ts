import { ReactNode, MouseEvent as ME } from 'react';

import { BoxProps } from '@chakra-ui/react';

export type HoveringOverlayMouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

export type HoveringOverlayProps = Omit<BoxProps, 'children'> & {
	children: (isHovering: boolean) => ReactNode;
};
