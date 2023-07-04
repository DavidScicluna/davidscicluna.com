import { NextComponentType } from 'next';

import i18n from '@/common/scripts/i18n';
import { Head, Html, Main, NextScript } from 'next/document';

const DocumentPage: NextComponentType = () => (
	<Html lang={i18n.language}>
		<Head />
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);
export default DocumentPage;
