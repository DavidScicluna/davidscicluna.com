import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ProjectID } from './useGetProjects';

export type AboutParagraph = string;
export type AboutParagraphs = AboutParagraph[];

const useGetAbout = (): AboutParagraphs => {
	const { i18n, t } = useTranslation();

	const projects = useMemo<AboutParagraphs>(() => {
		return [
			`Hello! I'm David Scicluna, a Front-end Developer based in the sunny Maltese islands. Currently working at Tain and as a freelancer.`,
			`I am very passionate about technology; I love developing ideas into applications and am committed to creating products and services with exceptional user experience and with modern user interface techniques.`,
			`I try my best to keep on learning and expanding my knowledge in this field, as I believe that the more I learn, the better the experience the end-users will have.`,
			`You can find me on Linkedin, and Github, or reach out to me via email at hello@davidscicluna.com.`
		];
	}, [i18n.language]);

	return projects;
};

export default useGetAbout;
