import { FC } from 'react';

import { Skeleton, Badge, BadgeLabel, Divider } from '@davidscicluna/component-library';

import { VStack, HStack, Text } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../DummyStructure';

const totalSections = range(4, 6);
const totalSkills = range(4, 10);

const widths = range(25, 50, 15);

const DummySkills: FC = () => {
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<Structure label='Skills'>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{range(sample(totalSections) || 6).map((_section, index) => (
					<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch'>
						<Skeleton width={`${sample(widths)}%`} colorMode={colorMode} isLoaded={false} variant='text'>
							<Text align='left' fontSize='2xl' fontWeight='semibold' lineHeight='shorter'>
								Label
							</Text>
						</Skeleton>

						<HStack
							width='100%'
							alignItems='stretch'
							justifyContent='stretch'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{range(sample(totalSkills) || 6).map((_skill, index) => (
								<Skeleton key={index} colorMode={colorMode} isLoaded={false} variant='rectangle'>
									<Badge color='gray' colorMode={colorMode} size='xs'>
										<BadgeLabel textTransform='uppercase'>Skill</BadgeLabel>
									</Badge>
								</Skeleton>
							))}
						</HStack>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default DummySkills;
