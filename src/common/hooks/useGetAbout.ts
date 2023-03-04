import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

export type AboutParagraph = string;
export type AboutParagraphs = AboutParagraph[];

const useGetAbout = (): AboutParagraphs => {
	const { i18n, t } = useTranslation();

	const projects = useMemo<AboutParagraphs>(() => {
		return [`${t('common.about.0')}`, `${t('common.about.1')}`, `${t('common.about.2')}`, `${t('common.about.3')}`];
	}, [i18n.language]);

	return projects;
};

export default useGetAbout;
