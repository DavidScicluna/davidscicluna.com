import { FC } from 'react';

import { useTheme, Badge, BadgeLabel, Divider, utils } from '@davidscicluna/component-library';

import { VStack, HStack, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useGetSkills, useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../Structure';

const { getColor } = utils;

const Skills: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { t } = useTranslation();

	const spacing = useSpacing();

	const skills = useGetSkills();

	return (
		<Structure label={`${t('about.labels.skills')}`}>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{skills.map(({ label, skills }, index) => (
					<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch'>
						<HStack width='100%' alignItems='center' justifyContent='stretch' spacing={2}>
							<Text
								align='left'
								color={getColor({ theme, colorMode, type: 'text.primary' })}
								fontSize='2xl'
								fontWeight='semibold'
								lineHeight='shorter'
							>
								{label}
							</Text>

							<Badge key={index} color='gray' colorMode={colorMode} size='xs' variant='outlined'>
								<BadgeLabel>{skills.length}</BadgeLabel>
							</Badge>
						</HStack>

						<HStack
							width='100%'
							alignItems='stretch'
							justifyContent='stretch'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{skills.map(({ label }, index) => (
								<Badge key={index} color='gray' colorMode={colorMode} size='xs'>
									<BadgeLabel textTransform='uppercase'>{label}</BadgeLabel>
								</Badge>
							))}
						</HStack>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default Skills;
