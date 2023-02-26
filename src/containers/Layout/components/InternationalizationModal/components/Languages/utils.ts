import { includes, lowerCase } from 'lodash';
import memoize from 'memoizee';

import allLanguages from '../../../../../../common/content/languages';
import i18n from '../../../../../../common/scripts/i18n';
import { Languages as LanguagesType } from '../../../../../../common/types';

export const getLanguages = memoize((query: string): LanguagesType => {
	const q = lowerCase(query.trim());
	return allLanguages.filter(
		({ iso_639_1, name }) =>
			includes(lowerCase(iso_639_1), q) ||
			includes(lowerCase(name), q) ||
			includes(lowerCase(`${i18n.t(`layout.internationalizationModal.languages.${iso_639_1}`)}`), q)
	);
});
