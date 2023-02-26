import { Color } from '@davidscicluna/component-library';

import { ColorMode as CUIColorMode } from '@chakra-ui/react';

import { Language } from '../../../common/types';

export type AppColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'green' | 'yellow'>;
export type AppColorMode = CUIColorMode | 'system';

export type StateProps = {
	ui: {
		color: AppColor;
		colorMode: AppColorMode;
		language: Language;
	};
};
