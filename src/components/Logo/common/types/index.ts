import { AppColor, AppColorMode, Style } from '@davidscicluna/component-library';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LogoProps = {
	color?: AppColor;
	colorMode?: AppColorMode;
	isClickable?: boolean;
	isSquare?: boolean;
	size?: LogoSize;
	sx?: Style;
};
