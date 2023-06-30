import { Style, utils } from '@davidscicluna/component-library';

import { isClickable as defaultIsClickable, size as defaultSize } from '../../default/props';
import { getSizeConfig } from '../../utils';

import { LogoStyleProps } from './types';

const { checkIsTouchDevice } = utils;

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isClickable = defaultIsClickable, size = defaultSize }: LogoStyleProps): Style => {
	const config = getSizeConfig({ size });

	const fontSize = config.fontSize;
	const padding = config.padding;

	const transition = 'none';
	const transitionProperty = [
		'width',
		'height',
		'background',
		'background-color',
		'border-color',
		'border-radius',
		'color',
		'font-size',
		'padding'
	].join(', ');
	const transitionDuration = theme.transition.duration.slow;
	const transitionTimingFunction = theme.transition.easing['ease-in-out'];

	return {
		'cursor': isClickable ? 'pointer' : 'default',

		'pointerEvents': isClickable ? 'auto' : 'none',

		'width': 'auto',
		'height': 'auto',
		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',
		'alignItems': 'center',
		'justifyContent': 'center',

		'userSelect': 'none',
		'willChange': 'auto',

		'outline': !isTouchDevice ? '0px transparent' : 'none !important',

		'fontFamily': 'Raleway, sans-serif',
		'fontSize': theme.fontSizes[fontSize],
		'fontWeight': theme.fontWeights.bold,
		'textTransform': 'lowercase',
		'whiteSpace': 'nowrap',
		'lineHeight': theme.lineHeights.base,
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'p': theme.space[padding],

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'*, *::before, *::after': {
			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		}
	};
};
