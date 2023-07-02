import { CardProps } from '@davidscicluna/component-library';

import { InternationalizationModalForm } from '@/containers/Layout/components/InternationalizationModal/common/types';

export type LanguageProps = Pick<CardProps, 'isActive' | 'onClick'> & {
	isSelected: boolean;
} & InternationalizationModalForm;
