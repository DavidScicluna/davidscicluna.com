export type LanguageIso6491 =
	| 'ru'
	| 'de'
	| 'fr'
	| 'it'
	| 'en'
	| 'es'
	| 'pl'
	| 'uk'
	| 'ro'
	| 'nl'
	| 'tr'
	| 'el'
	| 'hu'
	| 'sv'
	| 'cs'
	| 'pt'
	| 'sr'
	| 'bg'
	| 'hr'
	| 'da'
	| 'mt';
export type Language = { iso_639_1?: LanguageIso6491; name?: string };
export type Languages = Language[];
