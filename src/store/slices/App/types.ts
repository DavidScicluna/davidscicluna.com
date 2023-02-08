import { Color } from '@davidscicluna/component-library';

import { ColorMode as CUIColorMode } from '@chakra-ui/react';

export type AppColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;
export type AppColorMode = CUIColorMode | 'system';

export type StateProps = {
	ui: {
		color: AppColor;
		colorMode: AppColorMode;
	};
};
