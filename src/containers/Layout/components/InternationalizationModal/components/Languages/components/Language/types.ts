import { CardProps } from '@davidscicluna/component-library';

import { InternationalizationModalForm } from '../../../../types';

export type LanguageProps = Pick<CardProps, 'isActive' | 'onClick'> & {
	isSelected: boolean;
} & InternationalizationModalForm;
