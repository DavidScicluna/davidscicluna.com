/* eslint-disable import/no-anonymous-default-export */
import { Style, defaults, utils } from '@davidscicluna/component-library';

import { lighten } from 'color2k';

import { size as defaultSize } from '../../default/props';
import { getSizeConfig } from '../../utils';

import { LogoDarkStylingProps } from './types';

const { props, amount } = defaults;
const { defaultColor } = props;
const { hoverAmount, activeAmount } = amount;
const { checkIsTouchDevice, getHue } = utils;

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor, size = defaultSize }: LogoDarkStylingProps): Style => {
	const shade = getHue({ colorMode: 'dark', type: 'text.primary' });

	const config = getSizeConfig({ size });

	const offset = config.offset;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][shade], hoverAmount),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][shade], activeAmount),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][shade], activeAmount),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
