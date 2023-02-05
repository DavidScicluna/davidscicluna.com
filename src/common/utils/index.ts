import { ColorMode } from '@chakra-ui/react';

import { debounce } from 'lodash';

export const updateFavicon = debounce((colorMode: ColorMode): void => {
	localStorage.setItem('user_theme_colorMode', colorMode);
	window.dispatchEvent(new Event('storage'));
}, 1000);
