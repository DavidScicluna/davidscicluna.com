import { Style, Theme, AppColor, AppColorMode } from '@davidscicluna/component-library';

import { LogoProps } from '../types';

export type LogoStyleProps = Pick<LogoProps, 'isClickable' | 'size'> & {
	theme: Theme;
	color: AppColor;
	colorMode: AppColorMode;
};

export type LogoStyleReturn = {
	logo: Style;
};
