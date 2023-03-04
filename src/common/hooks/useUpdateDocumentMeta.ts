import { useEffect } from 'react';

import { useLocation } from 'react-router';

import { compact } from 'lodash';
import { useTranslation } from 'react-i18next';

const useUpdateDocumentMeta = (): void => {
	const { t } = useTranslation();

	const location = useLocation();

	const handleUpdateDocument = (): void => {
		const description = document.head.querySelector('meta[name="description"]');

		document.title = compact([`${t('page.title')}`, `${t(`common.navItems.${location.pathname}`)}`]).join(' • ');

		if (description) {
			description.textContent = `${t('page.description')}`;
		}
	};

	useEffect(() => handleUpdateDocument(), [location.pathname]);
};

export default useUpdateDocumentMeta;
