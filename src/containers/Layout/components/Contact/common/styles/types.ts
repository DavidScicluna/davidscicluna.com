import { Style, Theme } from '@davidscicluna/component-library';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../../../store/slices/App/types';

export type ContactStyleProps = {
	theme: Theme;
	color: AppColor;
	colorMode: ColorMode;
};

export type ContactStyleReturn = {
	contact: Style;
	hover: Style;
	active: Style;
};
