import { useCallback, useEffect } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { debounce } from 'lodash';
import { useMediaMatch } from 'rooks';

import { updateFavicon } from '../utils';

import { useSelector } from '.';

const useCheckColorMode = (): void => {
	const { colorMode: colorModeHook, setColorMode } = useColorMode();

	const colorMode = useSelector((state) => state.app.ui.colorMode);

	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const handleSetColorMode = useCallback(
		debounce(() => {
			switch (colorMode) {
				case 'system': {
					const mode = isDarkMode ? 'dark' : 'light';

					setColorMode(mode);
					updateFavicon(mode);
					break;
				}
				default: {
					setColorMode(colorMode);
					updateFavicon(colorMode);
					break;
				}
			}
		}, 750),
		[colorMode, isDarkMode]
	);

	useEffect(() => handleSetColorMode(), [colorMode, colorModeHook, isDarkMode]);
};

export default useCheckColorMode;
