import { AppColor, AppFullColorMode } from '@davidscicluna/component-library';

import { Language } from '@/common/content/languages';

export type AppSliceStateProps = {
	ui: {
		theme: {
			color: AppColor;
			colorMode: AppFullColorMode;
		};
		language: Language;
	};
};
