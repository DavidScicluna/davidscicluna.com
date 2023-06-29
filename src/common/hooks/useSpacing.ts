import { Space, useTheme } from '@davidscicluna/component-library';

import { useMediaQuery } from '@chakra-ui/react';

type UseSpacingReturn = [Space, Record<'xs' | 'sm' | 'md' | 'xl', Space>];

const useSpacing = (): UseSpacingReturn => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
	const [isXl] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

	return [isXl ? 5 : isMd ? 4 : isSm ? 3 : 2, { xs: 2, sm: 3, md: 4, xl: 5 }];
};

export default useSpacing;
