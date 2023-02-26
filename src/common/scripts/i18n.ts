/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from '../translations';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: false,
		interpolation: { escapeValue: false },
		resources: { ...translations }
	});

export default i18n;
