import { Space, useTheme } from '@davidscicluna/component-library';

import { useMediaQuery } from '@chakra-ui/react';

const useSpacing = (): Space => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
	const [isXl] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

	return isXl ? 5 : isMd ? 4 : isSm ? 3 : 2;
};

export default useSpacing;
