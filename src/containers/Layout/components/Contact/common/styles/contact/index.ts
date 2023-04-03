import { Style, utils } from '@davidscicluna/component-library';

import { darken } from 'color2k';

import { ContactStyleProps } from './types';

const { getColor } = utils;

const transition = 'none';

export default ({ theme, color, colorMode }: ContactStyleProps): Style => {
	const textColor = getColor({ theme, colorMode, color, type: 'dark' });
	const backgroundColor = getColor({ theme, colorMode, color, type: 'light' });

	return {
		'color': textColor,
		'background': backgroundColor,

		'transition': transition,
		'transitionProperty': transition,
		'transitionDuration': transition,
		'transitionTimingFunction': transition,

		'& button': {
			'&::before': {
				boxShadow: `0 4px 0 0 ${darken(textColor, 0.15)}`,
				borderColor: textColor,
				backgroundColor: textColor,
				background: textColor
			}
		},

		'& span': {
			color: backgroundColor
		},

		'& *': {
			transition: transition,
			transitionProperty: transition,
			transitionDuration: transition,
			transitionTimingFunctio: transition
		}
	};
};
