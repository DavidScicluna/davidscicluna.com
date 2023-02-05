import { Color } from '@davidscicluna/component-library';

import { ColorMode, useColorMode } from '@chakra-ui/react';

type UseUserThemeReturn = {
	color: Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;
	colorMode: ColorMode;
};

const color = 'blue';

const useUserTheme = (): UseUserThemeReturn => {
	const { colorMode } = useColorMode();

	return {
		color: color,
		colorMode
	};
};

export default useUserTheme;
