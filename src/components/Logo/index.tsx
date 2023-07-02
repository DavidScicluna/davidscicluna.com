import { FC } from 'react';

import { useGetThemeAppearance, useTheme } from '@davidscicluna/component-library';

import { Center } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { useTranslation } from 'react-i18next';

import {
	isClickable as defaultIsClickable,
	isSquare as defaultIsSquare,
	size as defaultSize
} from './common/default/props';
import useStyles from './common/styles';
import { LogoProps } from './common/types';

const Logo: FC<LogoProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useGetThemeAppearance();

	const { t } = useTranslation();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isClickable = defaultIsClickable,
		isSquare = defaultIsSquare,
		size = defaultSize,
		sx
	} = props;

	const style = useStyles({ theme, color, colorMode, isClickable, size });

	return <Center sx={merge(style.logo, sx)}>{`${t(`components.logo.${isSquare ? 'short' : 'long'}`)}`}</Center>;
};

export default Logo;
