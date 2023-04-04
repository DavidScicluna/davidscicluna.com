import { FC } from 'react';

import { Skeleton, DummyButton, Divider } from '@davidscicluna/component-library';

import { VStack, Center, Text } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../DummyStructure';

const totalCertifications = range(2, 4);

const titleWidths = range(25, 60, 15);
const companyWidths = range(25, 40, 10);

const DummyCertifications: FC = () => {
	const { color, colorMode } = useUserTheme();

	const spacing = useSpacing();

	return (
		<Structure label='Certifications'>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{range(sample(totalCertifications) || 3).map((_certification, index) => (
					<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
						<VStack width='100%' alignItems='stretch' justifyContent='stretch'>
							<Skeleton
								width={`${sample(titleWidths)}%`}
								colorMode={colorMode}
								isLoaded={false}
								variant='text'
							>
								<Text align='left' fontSize='2xl' fontWeight='semibold' lineHeight='shorter'>
									Title
								</Text>
							</Skeleton>

							<Skeleton
								width={`${sample(companyWidths)}%`}
								colorMode={colorMode}
								isLoaded={false}
								variant='text'
							>
								<Text
									align='left'
									fontSize='md'
									fontWeight='medium'
									lineHeight='shorter'
									textTransform='uppercase'
								>
									Company
								</Text>
							</Skeleton>
						</VStack>

						<Center width='100%' justifyContent='flex-start'>
							<DummyButton
								color={color}
								colorMode={colorMode}
								variant='text'
								sx={{ height: 'auto', p: '0px !important' }}
							>
								See Credential
							</DummyButton>
						</Center>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default DummyCertifications;
