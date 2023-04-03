import { useMemo } from 'react';

import { ImageSrc } from '@davidscicluna/component-library';

import { useTranslation } from 'react-i18next';

export type ProjectID = 'edb' | 'cl' | 'concentration' | 'journal' | 'clock' | 'weather' | 'calculator';

type ProjectLink = { label: string; href: string };
type ProjectLinks = Record<'web' | 'git', ProjectLink> & { playground: Omit<ProjectLink, 'href'> };

type ProjectStatus = 'finished' | 'ongoing';

export type Project = {
	id: ProjectID;
	title: string;
	short?: string;
	description: string;
	links: ProjectLinks;
	image: ImageSrc;
	status: ProjectStatus;
};
export type Projects = Project[];

const useGetProjects = (): Projects => {
	const { i18n, t } = useTranslation();

	const projects = useMemo<Projects>(() => {
		return [
			{
				id: 'edb',
				title: `${t('common.projects.edb.title')}`,
				short: `${t('common.projects.edb.short')}`,
				description: `${t('common.projects.edb.description')}`,
				links: {
					web: {
						label: `${t('common.projects.edb.links.web')}`,
						href: 'https://davidscicluna.github.io/edb/'
					},
					playground: {
						label: `${t('common.projects.edb.links.playground')}`
					},
					git: {
						label: `${t('common.projects.edb.links.git')}`,
						href: 'https://github.com/davidscicluna/edb/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'ongoing'
			},
			{
				id: 'concentration',
				title: `${t('common.projects.concentration.title')}`,
				description: `${t('common.projects.concentration.description')}`,
				links: {
					web: {
						label: `${t('common.projects.concentration.links.web')}`,
						href: 'https://davidscicluna.github.io/react-concentration/'
					},
					playground: {
						label: `${t('common.projects.concentration.links.playground')}`
					},
					git: {
						label: `${t('common.projects.concentration.links.git')}`,
						href: 'https://github.com/davidscicluna/react-concentration/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'finished'
			},
			{
				id: 'journal',
				title: `${t('common.projects.journal.title')}`,
				description: `${t('common.projects.journal.description')}`,
				links: {
					web: {
						label: `${t('common.projects.journal.links.web')}`,
						href: 'https://davidscicluna.github.io/react-journal/'
					},
					playground: {
						label: `${t('common.projects.journal.links.playground')}`
					},
					git: {
						label: `${t('common.projects.journal.links.git')}`,
						href: 'https://github.com/davidscicluna/react-journal/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'finished'
			},
			{
				id: 'clock',
				title: `${t('common.projects.clock.title')}`,
				description: `${t('common.projects.clock.description')}`,
				links: {
					web: {
						label: `${t('common.projects.clock.links.web')}`,
						href: 'https://davidscicluna.github.io/react-clock/'
					},
					playground: {
						label: `${t('common.projects.clock.links.playground')}`
					},
					git: {
						label: `${t('common.projects.clock.links.git')}`,
						href: 'https://github.com/davidscicluna/react-clock/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'finished'
			},
			{
				id: 'weather',
				title: `${t('common.projects.weather.title')}`,
				description: `${t('common.projects.weather.description')}`,
				links: {
					web: {
						label: `${t('common.projects.weather.links.web')}`,
						href: 'https://davidscicluna.github.io/react-weather/'
					},
					playground: {
						label: `${t('common.projects.weather.links.playground')}`
					},
					git: {
						label: `${t('common.projects.weather.links.git')}`,
						href: 'https://github.com/davidscicluna/react-weather/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'finished'
			},
			{
				id: 'calculator',
				title: `${t('common.projects.calculator.title')}`,
				description: `${t('common.projects.calculator.description')}`,
				links: {
					web: {
						label: `${t('common.projects.calculator.links.web')}`,
						href: 'https://davidscicluna.github.io/react-calculator/'
					},
					playground: {
						label: `${t('common.projects.calculator.links.playground')}`
					},
					git: {
						label: `${t('common.projects.calculator.links.git')}`,
						href: 'https://github.com/davidscicluna/react-calculator/'
					}
				},
				image: { full: '', thumbnail: '' },
				status: 'finished'
			}
		];
	}, [i18n.language]);

	return projects;
};

export default useGetProjects;
