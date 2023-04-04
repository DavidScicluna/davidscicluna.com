import { FC } from 'react';

import { useTheme, Badge, BadgeLabel, Divider, Fade, SlideFade, utils } from '@davidscicluna/component-library';

import { VStack, HStack, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { inView as defaultInView } from '../../../../../common/data/defaultPropValues';
import { useGetSkills, useGetTransitionMeta, useSpacing, useUserTheme } from '../../../../../common/hooks';
import { CommonAboutProps as SkillsProps } from '../../common/types';
import Structure from '../Structure';

const { getColor } = utils;

const Skills: FC<SkillsProps> = ({ inView = defaultInView, timeout }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { t } = useTranslation();

	const spacing = useSpacing();

	const skills = useGetSkills();

	const [canTriggerAnimation, { delay = 0, ...config }] = useGetTransitionMeta({ timeout });

	return (
		<Structure inView={inView} timeout={timeout} label={`${t('about.labels.skills')}`}>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{skills.map(({ label, skills }, groupIndex) => (
					<VStack key={groupIndex} width='100%' alignItems='stretch' justifyContent='stretch'>
						<HStack width='100%' alignItems='center' justifyContent='stretch' spacing={2}>
							<SlideFade
								in={inView && canTriggerAnimation}
								unmountOnExit={false}
								transition={{
									enter: { ...config, delay: delay * 1.25 * Number(groupIndex + 1) },
									exit: { ...config, delay: delay * 1.25 * Number(groupIndex + 1) }
								}}
							>
								<Text
									align='left'
									color={getColor({ theme, colorMode, type: 'text.primary' })}
									fontSize='2xl'
									fontWeight='semibold'
									lineHeight='shorter'
								>
									{label}
								</Text>
							</SlideFade>

							<Fade
								in={inView && canTriggerAnimation}
								unmountOnExit={false}
								transition={{
									enter: { ...config, delay: delay * 1.5 * Number(groupIndex + 1) },
									exit: { ...config, delay: delay * 1.5 * Number(groupIndex + 1) }
								}}
							>
								<Badge key={groupIndex} color='gray' colorMode={colorMode} size='xs' variant='outlined'>
									<BadgeLabel>{skills.length}</BadgeLabel>
								</Badge>
							</Fade>
						</HStack>

						<HStack
							width='100%'
							alignItems='stretch'
							justifyContent='stretch'
							wrap='wrap'
							spacing={0}
							gap={1}
						>
							{skills.map(({ label }, skillIndex) => (
								<Fade
									key={skillIndex}
									in={inView && canTriggerAnimation}
									unmountOnExit={false}
									transition={{
										enter: {
											...config,
											delay: delay * 2 * Number(groupIndex + 1) * Number(skillIndex + 1)
										},
										exit: {
											...config,
											delay: delay * 2 * Number(groupIndex + 1) * Number(skillIndex + 1)
										}
									}}
								>
									<Badge color='gray' colorMode={colorMode} size='xs'>
										<BadgeLabel textTransform='uppercase'>{label}</BadgeLabel>
									</Badge>
								</Fade>
							))}
						</HStack>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default Skills;
