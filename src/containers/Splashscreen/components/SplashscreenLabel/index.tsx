import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useUserTheme } from '../../../../common/hooks';

const { getColor } = utils;

const SplashscreenLabel: FC = () => {
	const theme = useTheme();

	const { colorMode } = useUserTheme();

	return (
		<Text
			align='center'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='xs'
			fontWeight='semibold'
			userSelect='none'
			whiteSpace='nowrap'
			textTransform='uppercase'
		>
			David Scicluna • Front-End Developer
		</Text>
	);
};

export default SplashscreenLabel;
