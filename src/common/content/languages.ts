import i18n from '../scripts/i18n';
import { Language, Languages } from '../types';

const languages: Languages = [
	{
		iso_639_1: 'ru',
		name: 'Pусский'
	},
	{
		iso_639_1: 'de',
		name: 'Deutsch'
	},
	{
		iso_639_1: 'fr',
		name: 'Français'
	},
	{
		iso_639_1: 'it',
		name: 'Italiano'
	},
	{
		iso_639_1: 'en',
		name: 'English'
	},
	{
		iso_639_1: 'es',
		name: 'Español'
	},
	{
		iso_639_1: 'pl',
		name: 'Polski'
	},
	{
		iso_639_1: 'uk',
		name: 'Український'
	},
	{
		iso_639_1: 'ro',
		name: 'Română'
	},
	{
		iso_639_1: 'nl',
		name: 'Nederlands'
	},
	{
		iso_639_1: 'tr',
		name: 'Türkçe'
	},
	{
		iso_639_1: 'el',
		name: 'ελληνικά'
	},
	{
		iso_639_1: 'hu',
		name: 'Magyar'
	},
	{
		iso_639_1: 'sv',
		name: 'Svenska'
	},
	{
		iso_639_1: 'cs',
		name: 'Český'
	},
	{
		iso_639_1: 'pt',
		name: 'Português'
	},
	{
		iso_639_1: 'sr',
		name: 'Srpski'
	},
	{
		iso_639_1: 'bg',
		name: 'български'
	},
	{
		iso_639_1: 'hr',
		name: 'Hrvatski'
	},
	{
		iso_639_1: 'da',
		name: 'Dansk'
	},
	{
		iso_639_1: 'mt',
		name: 'Malti'
	}
];

export const defaultLanguage: Language = languages.find(({ iso_639_1 }) => iso_639_1 === i18n.language) || {
	iso_639_1: 'en',
	name: 'English'
};

export default languages;
