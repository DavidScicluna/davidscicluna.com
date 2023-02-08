import { Space } from '@davidscicluna/component-library';

import { memoize } from 'lodash';

import { LogoProps } from '../../types';
import { isSquare as defaultIsSquare, size as defaultSize } from '../data/defaultPropValues';

type GetSizeConfigReturn = {
	width: number; // In Pixels
	height: number; // In Pixels
	// fontSize: FontSize; // In FontSize (Theme) Values
	fontSize: number; // In Percentage
	offset: number; // In Pixels
	padding: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = Pick<LogoProps, 'isSquare' | 'size'>;

export const getSizeConfig = memoize(
	({ isSquare = defaultIsSquare, size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
		switch (size) {
			case 'xs':
				return {
					width: isSquare ? 30 : 60,
					height: 30,
					fontSize: isSquare ? 75 : 100,
					offset: 2,
					padding: 0.25
				};
			case 'sm':
				return {
					width: isSquare ? 40 : 80,
					height: 40,
					fontSize: isSquare ? 100 : 150,
					offset: 2,
					padding: 0.5
				};
			case 'lg':
				return {
					width: isSquare ? 70 : 140,
					height: 70,
					fontSize: isSquare ? 200 : 250,
					offset: 4,
					padding: 1.5
				};
			case 'xl':
				return {
					width: isSquare ? 90 : 180,
					height: 90,
					fontSize: isSquare ? 250 : 300,
					offset: 4,
					padding: 2
				};
			default:
				return {
					width: isSquare ? 50 : 100,
					height: 50,
					fontSize: isSquare ? 150 : 200,
					offset: 4,
					padding: 1
				};
		}
	}
);

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
