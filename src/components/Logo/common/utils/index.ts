import { FontSize, Space } from '@davidscicluna/component-library';

import { memoize } from 'lodash';

import { LogoProps } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type GetSizeConfigReturn = {
	fontSize: FontSize; // In FontSize (Theme) Values
	offset: number; // In Pixels
	padding: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = Pick<LogoProps, 'size'>;

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				fontSize: 'sm',
				offset: 2,
				padding: 0.25
			};
		case 'sm':
			return {
				fontSize: 'lg',
				offset: 2,
				padding: 0.5
			};
		case 'lg':
			return {
				fontSize: '4xl',
				offset: 4,
				padding: 1.5
			};
		case 'xl':
			return {
				fontSize: '6xl',
				offset: 4,
				padding: 2
			};
		default:
			return {
				fontSize: '2xl',
				offset: 4,
				padding: 1
			};
	}
});

type GetAmountReturn = {
	hover: number;
	active: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		hover: 0.05,
		active: 0.1
	};
};
