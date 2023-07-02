import { AppColor, Style, Theme } from '@davidscicluna/component-library';

import { ColorMode } from '@chakra-ui/react';

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
