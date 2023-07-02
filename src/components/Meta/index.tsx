import { FC, useMemo } from 'react';

import { useGetThemeAppearance } from '@davidscicluna/component-library';

import { getManifest } from '@/common/manifest';
import { capitalize, range } from 'lodash';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { MetaProps } from './common/types';

const Meta: FC<MetaProps> = (props) => {
	const { colorMode } = useGetThemeAppearance();

	const { i18n, t } = useTranslation();

	const defaultTitle = useMemo<string>(() => `${t('page.title')}`, [i18n.language]);
	const defaultDescription = useMemo<string>(() => `${t('page.description')}`, [i18n.language]);
	const defaultKeywords = useMemo<string>(() => {
		return range(36)
			.map((i) => `${t(`page.keywords.${i}`)}`)
			.map((keyword) => capitalize(keyword))
			.join(', ');
	}, [i18n.language]);

	const { title = defaultTitle, description = defaultDescription, keywords = defaultKeywords } = props;

	const manifest = useMemo<string>(() => {
		const manifest = getManifest(i18n, colorMode);
		const blob = new Blob([manifest], { type: 'application/json' });

		return URL.createObjectURL(blob);
	}, [i18n, colorMode]);

	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />

			<link rel='icon' href={`manifest_${colorMode}_favicon.ico`} />
			<link rel='apple-touch-icon' href={`manifest_${colorMode}_logo192.png`} />
			<link rel='manifest' href={manifest} />

			<title>{title}</title>
		</Head>
	);
};

export default Meta;
