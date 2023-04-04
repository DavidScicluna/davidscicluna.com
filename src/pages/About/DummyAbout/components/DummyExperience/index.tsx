import { FC } from 'react';

import { Skeleton, Divider } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../DummyStructure';

const totalExperiences = range(4, 6);

const placeWidths = range(25, 50, 15);
const roleWidths = range(25, 60, 20);

const DummyExperience: FC = () => {
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<Structure label='Experience'>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{range(sample(totalExperiences) || 5).map((_experience, index) => (
					<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch'>
						<Skeleton width='fit-content' colorMode={colorMode} isLoaded={false} variant='text'>
							<Text align='left' fontSize='md' lineHeight='shorter'>
								MMMM YYYY - MMMM YYYY
							</Text>
						</Skeleton>

						<Skeleton
							width={`${sample(placeWidths)}%`}
							colorMode={colorMode}
							isLoaded={false}
							variant='text'
						>
							<Text align='left' fontSize='2xl' fontWeight='semibold' lineHeight='shorter'>
								Place
							</Text>
						</Skeleton>

						<Skeleton
							width={`${sample(roleWidths)}%`}
							colorMode={colorMode}
							isLoaded={false}
							variant='text'
						>
							<Text align='left' fontSize='md' lineHeight='shorter'>
								Role
							</Text>
						</Skeleton>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default DummyExperience;
