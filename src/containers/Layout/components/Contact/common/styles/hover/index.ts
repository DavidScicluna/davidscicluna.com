import { Style, utils } from '@davidscicluna/component-library';

import { darken } from 'color2k';

import { ContactHoveringStyleProps } from './types';

const { getColor } = utils;

export default ({ theme, color, colorMode }: ContactHoveringStyleProps): Style => {
	const textColor = getColor({ theme, colorMode, color, type: 'light' });
	const backgroundColor = getColor({ theme, colorMode, color, type: 'dark' });

	return {
		'color': textColor,
		'background': backgroundColor,

		'& button': {
			'&::before': {
				boxShadow: `0 4px 0 0 ${darken(textColor, 0.15)}`,
				borderColor: textColor,
				backgroundColor: textColor,
				background: textColor
			},

			'&:hover': {
				'&::before': {
					boxShadow: `0 4px 0 0 ${darken(textColor, 0.15)}`,
					borderColor: textColor,
					backgroundColor: textColor,
					background: textColor
				},

				'&:active': {
					'&::before': {
						boxShadow: 'none',
						borderColor: textColor,
						backgroundColor: textColor,
						background: textColor
					}
				}
			},

			'&::active': {
				'&::before': {
					boxShadow: 'none',
					borderColor: textColor,
					backgroundColor: textColor,
					background: textColor
				}
			}
		},

		'& span': {
			color: backgroundColor
		},

		'&:active': {
			'color': textColor,
			'background': backgroundColor,

			'& button': {
				'&::before': {
					boxShadow: 'none',
					borderColor: textColor,
					backgroundColor: textColor,
					background: textColor
				}
			},

			'& span': {
				color: backgroundColor
			}
		}
	};
};
