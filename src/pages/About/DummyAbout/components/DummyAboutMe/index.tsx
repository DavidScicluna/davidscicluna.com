import { FC } from 'react';

import { Skeleton } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../DummyStructure';

const totalParagraphs = range(4, 6);
const totalLines = range(2, 4);

const widths = range(25, 100, 15);

const AboutMe: FC = () => {
	const { colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<Structure label='About Me'>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				{range(sample(totalParagraphs) || 5).map((_paragraph, index) => {
					const lines = range(sample(totalLines) || 3);
					return (
						<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch'>
							{lines.map((_line, index) => (
								<Skeleton
									key={index}
									width={index < lines.length - 1 ? '100%' : `${sample(widths)}%`}
									colorMode={colorMode}
									isLoaded={false}
									variant='text'
								>
									<Text align='left' fontSize='xl' lineHeight='shorter' userSelect='none'>
										Line
									</Text>
								</Skeleton>
							))}
						</VStack>
					);
				})}
			</VStack>
		</Structure>
	);
};

export default AboutMe;
