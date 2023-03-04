import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ProjectID } from './useGetProjects';

export type Skill = { label: string; projects: ProjectID[] };
export type Skills = Skill[];

export type SkillGroup = { label: string; skills: Skills };
export type SkillGroups = SkillGroup[];

const useGetSkills = (): SkillGroups => {
	const { i18n, t } = useTranslation();

	const skills = useMemo<SkillGroups>(() => {
		return [
			{
				label: `${t('common.skills.0.label')}`,
				skills: [
					{
						label: `${t('common.skills.0.skills.0')}`,
						projects: ['edb', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.0.skills.1')}`,
						projects: ['edb', 'concentration', 'journal', 'clock']
					},
					{
						label: `${t('common.skills.0.skills.2')}`,
						projects: ['edb', 'concentration', 'journal', 'clock']
					},
					{
						label: `${t('common.skills.0.skills.3')}`,
						projects: ['edb', 'concentration', 'journal']
					}
				]
			},
			{
				label: `${t('common.skills.1.label')}`,
				skills: [
					{
						label: `${t('common.skills.1.skills.0')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.1.skills.1')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.1.skills.2')}`,
						projects: []
					},
					{
						label: `${t('common.skills.1.skills.3')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.1.skills.4')}`,
						projects: ['concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.1.skills.5')}`,
						projects: ['edb', 'cl']
					}
				]
			},
			{
				label: `${t('common.skills.2.label')}`,
				skills: [
					{
						label: `${t('common.skills.2.skills.0')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.2.skills.1')}`,
						projects: []
					}
				]
			},
			{
				label: `${t('common.skills.3.label')}`,
				skills: [
					{
						label: `${t('common.skills.3.skills.0')}`,
						projects: ['edb', 'cl']
					},
					{
						label: `${t('common.skills.3.skills.1')}`,
						projects: ['concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.3.skills.2')}`,
						projects: ['edb', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.3.skills.3')}`,
						projects: ['journal']
					},
					{
						label: `${t('common.skills.3.skills.4')}`,
						projects: ['cl']
					}
				]
			},
			{
				label: `${t('common.skills.4.label')}`,
				skills: [
					{
						label: `${t('common.skills.4.skills.0')}`,
						projects: []
					},
					{
						label: `${t('common.skills.4.skills.1')}`,
						projects: []
					}
				]
			},
			{
				label: `${t('common.skills.5.label')}`,
				skills: [
					{
						label: `${t('common.skills.5.skills.0')}`,
						projects: ['edb', 'cl']
					},
					{
						label: `${t('common.skills.5.skills.1')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.5.skills.2')}`,
						projects: []
					},
					{
						label: `${t('common.skills.5.skills.3')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.5.skills.4')}`,
						projects: ['edb', 'cl', 'concentration', 'journal', 'clock', 'weather', 'calculator']
					},
					{
						label: `${t('common.skills.5.skills.5')}`,
						projects: ['edb']
					},
					{
						label: `${t('common.skills.5.skills.6')}`,
						projects: []
					}
				]
			}
		];
	}, [i18n.language]);

	return skills;
};

export default useGetSkills;
