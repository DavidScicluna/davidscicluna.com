/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, forwardRef } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useUserTheme } from '../../../../common/hooks';

import { SplashscreenLabelRef } from './types';

const { getColor } = utils;

const SplashscreenLabel = forwardRef<SplashscreenLabelRef>(function SplashscreenLabel(_props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { t } = useTranslation();

	return (
		<Text
			ref={ref}
			align='center'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='xs'
			fontWeight='semibold'
			userSelect='none'
			whiteSpace='nowrap'
			textTransform='uppercase'
		>
			{`${t('splashscreen.label')}`}
		</Text>
	);
});

export default SplashscreenLabel;
