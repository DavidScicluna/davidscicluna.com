import { Style, utils } from '@davidscicluna/component-library';

import { ContactActiveStyleProps } from './types';

const { getColor } = utils;

export default ({ theme, color, colorMode }: ContactActiveStyleProps): Style => {
	const textColor = getColor({ theme, colorMode, color, type: 'light' });
	const backgroundColor = getColor({ theme, colorMode, color, type: 'dark' });

	return {
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
	};
};
