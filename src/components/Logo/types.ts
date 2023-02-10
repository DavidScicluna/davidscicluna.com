import { Color, Style } from '@davidscicluna/component-library';

import { ColorMode } from '@chakra-ui/react';

export type LogoColor = Exclude<Color, 'transparent' | 'black' | 'white'>;
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LogoProps = {
	color?: LogoColor;
	colorMode?: ColorMode;
	isClickable?: boolean;
	isSquare?: boolean;
	size?: LogoSize;
	sx?: Style;
};
