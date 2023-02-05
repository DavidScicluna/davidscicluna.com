import { ColorMode as CUIColorMode } from '@chakra-ui/react';

export type ColorMode = CUIColorMode | 'system';

export type StateProps = {
	ui: {
		colorMode: ColorMode;
	};
};
