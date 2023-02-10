import { Style, Theme } from '@davidscicluna/component-library';

import { LogoProps } from '../../types';

export type LogoStyleProps = {
	theme: Theme;
} & Pick<LogoProps, 'color' | 'colorMode' | 'isClickable' | 'size'>;

export type LogoStyleReturn = {
	logo: Style;
};
