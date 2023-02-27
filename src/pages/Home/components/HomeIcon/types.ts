import { HomeIconCommonProps } from '../../common/types';

export type HomeIconProps = HomeIconCommonProps & {
	icon: 'html' | 'css' | 'js' | 'ts' | 'react';
};
