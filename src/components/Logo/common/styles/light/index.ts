import { Style, utils } from '@davidscicluna/component-library';

import { darken } from 'color2k';

import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../utils';

import { LogoLightStylingProps } from './types';

const { checkIsTouchDevice, getHue } = utils;

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor, size = defaultSize }: LogoLightStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({ colorMode: 'light', type: 'text.primary' });

	const config = getSizeConfig({ size });

	const offset = config.offset;

	return {
		'color': theme.colors.gray[shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: darken(theme.colors[color][shade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: darken(theme.colors[color][shade], amount.active),
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
