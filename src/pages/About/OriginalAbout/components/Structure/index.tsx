import { FC } from 'react';

import { useTheme, SlideFade, utils } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { useGetTransitionMeta } from '../../common/hooks';

import { StructureProps } from './types';

const { getColor } = utils;

const Structure: FC<StructureProps> = ({ children, label, inView, timeout }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	const [canTriggerAnimation, { delay = 0, ...config }] = useGetTransitionMeta({ timeout });

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing} p={spacing}>
			<SlideFade
				in={inView && canTriggerAnimation}
				unmountOnExit={false}
				transition={{ enter: { ...config, delay }, exit: { ...config, delay } }}
			>
				<Text
					align='left'
					color={getColor({ theme, colorMode, type: 'text.primary' })}
					fontSize='4xl'
					fontWeight='bold'
					lineHeight='shorter'
				>
					{label}
				</Text>
			</SlideFade>

			{children}
		</VStack>
	);
};

export default Structure;
