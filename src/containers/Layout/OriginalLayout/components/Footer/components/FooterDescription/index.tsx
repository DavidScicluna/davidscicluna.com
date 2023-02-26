import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useUserTheme } from '../../../../../../../common/hooks';

const { getColor } = utils;

const FooterDescription: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { t } = useTranslation();

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='sm'
			lineHeight='shorter'
			userSelect='none'
		>
			{`${t('layout.footer.description')}`}
		</Text>
	);
};

export default FooterDescription;
