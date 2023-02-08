import { Style, utils } from '@davidscicluna/component-library';

import { lighten } from 'color2k';

import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../utils';

import { LogoDarkStylingProps } from './types';

const { checkIsTouchDevice, getHue } = utils;

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor, size = defaultSize }: LogoDarkStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({ colorMode: 'dark', type: 'text.primary' });

	const config = getSizeConfig({ size });

	const offset = config.offset;

	return {
		'color': theme.colors.gray[shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][shade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][shade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][shade], amount.active),
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
