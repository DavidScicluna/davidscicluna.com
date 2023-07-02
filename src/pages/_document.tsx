import { useMemo } from 'react';

import { NextComponentType } from 'next';

import { Head, Html, Main, NextScript } from 'next/document';
import { useTranslation } from 'react-i18next';

const DocumentPage: NextComponentType = () => {
	const { i18n } = useTranslation();

	const lang = useMemo(() => i18n.language, [i18n.language]);

	return (
		<Html lang={lang}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default DocumentPage;
