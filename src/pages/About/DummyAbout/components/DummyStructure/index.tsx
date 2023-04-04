import { FC } from 'react';

import { Skeleton } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';

import { DummyStructureProps } from './types';

const DummyStructure: FC<DummyStructureProps> = ({ children, label }) => {
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing} p={spacing}>
			<Skeleton width='fit-content' colorMode={colorMode} isLoaded={false} variant='text'>
				<Text align='left' fontSize='4xl' fontWeight='bold' lineHeight='shorter'>
					{label}
				</Text>
			</Skeleton>

			{children}
		</VStack>
	);
};

export default DummyStructure;
