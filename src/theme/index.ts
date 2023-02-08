import { Fonts } from '@davidscicluna/component-library';

import { extendTheme } from '@chakra-ui/react';

const theme = {
	fonts: {
		body: 'Raleway, sans-serif',
		heading: 'Roboto Slab, serif',
		mono: 'Roboto Mono, monospace'
	} as Fonts
};

export default extendTheme({ ...theme });
