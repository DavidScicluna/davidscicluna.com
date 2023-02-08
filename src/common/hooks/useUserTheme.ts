import { useColorMode } from '@chakra-ui/react';

import { AppColor, AppColorMode } from '../../store/slices/App/types';

import { useSelector } from '.';

type UseUserThemeReturn = {
	color: AppColor;
	colorMode: Exclude<AppColorMode, 'system'>;
};

const useUserTheme = (): UseUserThemeReturn => {
	const { colorMode } = useColorMode();

	const color = useSelector((state) => state.app.ui.color);

	return { color, colorMode };
};

export default useUserTheme;
