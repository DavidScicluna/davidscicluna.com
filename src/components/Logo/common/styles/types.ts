import { Style, Theme } from '@davidscicluna/component-library';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../store/slices/App/types';
import { LogoProps } from '../../types';

export type LogoStyleProps = {
	theme: Theme;
	color: AppColor;
	colorMode: ColorMode;
} & Pick<LogoProps, 'isClickable' | 'isSquare' | 'size'>;

export type LogoStyleReturn = {
	logo: Style;
};
