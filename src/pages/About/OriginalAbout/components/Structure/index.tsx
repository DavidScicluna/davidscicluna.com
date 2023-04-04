import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';

import { StructureProps } from './types';

const { getColor } = utils;

const Structure: FC<StructureProps> = ({ children, label }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing} p={spacing}>
			<Text
				align='left'
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				fontSize='4xl'
				fontWeight='bold'
				lineHeight='shorter'
			>
				{label}
			</Text>

			{children}
		</VStack>
	);
};

export default Structure;
