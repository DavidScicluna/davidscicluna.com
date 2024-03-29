import { defaults } from '@davidscicluna/component-library';

import { memoize, merge } from 'lodash';

import { isClickable as defaultIsClickable, size as defaultSize } from '../default/props';

import dark from './dark';
import light from './light';
import logo from './logo';
import { LogoStyleProps, LogoStyleReturn } from './types';

const { defaultColor, defaultColorMode } = defaults.props;

export default memoize((props: LogoStyleProps): LogoStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isClickable = defaultIsClickable,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		logo: merge(logo({ theme, isClickable, size }), scheme({ theme, color }))
	};
});
