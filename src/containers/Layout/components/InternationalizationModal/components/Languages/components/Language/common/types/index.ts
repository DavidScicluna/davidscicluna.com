import { CardProps } from '@davidscicluna/component-library';

import { InternationalizationModalForm } from '../../../../../../common/types';

export type LanguageProps = Pick<CardProps, 'isActive' | 'onClick'> & {
	isSelected: boolean;
} & InternationalizationModalForm;
