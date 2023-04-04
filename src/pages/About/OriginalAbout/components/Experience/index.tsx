import { FC, useMemo } from 'react';

import { useTheme, Divider, utils } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useTranslation } from 'react-i18next';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../Structure';

import { Experiences } from './types';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const { getColor } = utils;

const Experience: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { i18n, t } = useTranslation();

	const spacing = useSpacing();

	const experiences = useMemo<Experiences>(() => {
		return [
			{
				startedAt: dayjs(new Date()).set('year', 2020).set('month', 5).set('day', 5).toISOString(),
				place: `${t('about.experiences.0.place')}`,
				role: `${t('about.experiences.0.role')}`
			},
			{
				startedAt: dayjs(new Date()).set('year', 2020).set('month', 0).toISOString(),
				place: `${t('about.experiences.1.place')}`,
				role: `${t('about.experiences.1.role')}`
			},
			{
				startedAt: dayjs(new Date()).set('year', 2019).set('month', 6).set('day', 1).toISOString(),
				endedAt: dayjs(new Date()).set('year', 2019).set('month', 8).set('day', 13).toISOString(),
				place: `${t('about.experiences.2.place')}`,
				role: `${t('about.experiences.2.role')}`
			},
			{
				startedAt: dayjs(new Date()).set('year', 2018).set('month', 6).set('day', 2).toISOString(),
				endedAt: dayjs(new Date()).set('year', 2018).set('month', 8).set('day', 14).toISOString(),
				place: `${t('about.experiences.3.place')}`,
				role: `${t('about.experiences.3.role')}`
			},
			{
				startedAt: dayjs(new Date()).set('year', 2017).set('month', 6).set('day', 3).toISOString(),
				endedAt: dayjs(new Date()).set('year', 2017).set('month', 8).set('day', 15).toISOString(),
				place: `${t('about.experiences.4.place')}`,
				role: `${t('about.experiences.4.role')}`
			}
		];
	}, [i18n.language]);

	return (
		<Structure label={`${t('about.labels.experience')}`}>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{experiences.map(({ startedAt, endedAt, place, role }, index) => (
					<VStack key={index} width='100%' alignItems='stretch' justifyContent='stretch'>
						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.secondary' })}
							fontSize='md'
							lineHeight='shorter'
						>
							{`${[
								dayjs(startedAt).format('MMMM YYYY'),
								endedAt ? dayjs(endedAt).format('MMMM YYYY') : 'Present'
							].join(' - ')} (${dayjs
								.duration(dayjs(startedAt).diff(dayjs(endedAt || new Date())))
								.humanize()})`}
						</Text>

						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.primary' })}
							fontSize='2xl'
							fontWeight='semibold'
							lineHeight='shorter'
						>
							{place}
						</Text>

						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.secondary' })}
							fontSize='md'
							lineHeight='shorter'
						>
							{role}
						</Text>
					</VStack>
				))}
			</VStack>
		</Structure>
	);
};

export default Experience;
