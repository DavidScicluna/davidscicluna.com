import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import content from '../../../../../../../common/content/footer';
import { useUserTheme } from '../../../../../../../common/hooks';

const { description } = content;

const { getColor } = utils;

const FooterDescription: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='sm'
			lineHeight='shorter'
			userSelect='none'
		>
			{description}
		</Text>
	);
};

export default FooterDescription;
