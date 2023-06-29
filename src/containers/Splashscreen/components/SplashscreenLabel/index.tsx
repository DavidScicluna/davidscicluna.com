import { ReactElement, forwardRef } from 'react';

import { useGetColor } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SplashscreenLabelRef } from './common/types';

const SplashscreenLabel = forwardRef<SplashscreenLabelRef>(function SplashscreenLabel(_props, ref): ReactElement {
	const { t } = useTranslation();

	const color = useGetColor({ color: 'gray', type: 'text.secondary' });

	return (
		<Text
			ref={ref}
			align='center'
			color={color}
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
