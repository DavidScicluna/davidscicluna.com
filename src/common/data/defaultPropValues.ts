import { sample } from 'lodash';

import { AppColor, AppColorMode } from '../../store/slices/App/types';

export const color: AppColor =
	sample([
		'red',
		'pink',
		'purple',
		'deep_purple',
		'indigo',
		'blue',
		'light_blue',
		'cyan',
		'teal',
		'green',
		'light_green',
		'lime',
		'yellow',
		'orange',
		'deep_orange'
	]) || 'blue';
export const colorMode: AppColorMode = 'system';

export const inView = true;
