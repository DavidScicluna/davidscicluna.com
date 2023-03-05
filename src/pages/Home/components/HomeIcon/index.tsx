import { FC } from 'react';

import { useTheme, Tooltip, Image } from '@davidscicluna/component-library';

import { useBoolean, AspectRatio } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import icons from '../../../../common/assets/icons';
import { useUserTheme } from '../../../../common/hooks';

import { HomeIconProps } from './types';

const HomeIcon: FC<HomeIconProps> = ({ icon, isDummy = false }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { t } = useTranslation();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label={`${t(`home.icons.${icon}.aria-label`)}`}
			colorMode={colorMode}
			isOpen={!isDummy && isHovering}
			placement='top'
			label={`${t(`home.icons.${icon}.label`)}`}
			gutter={12}
		>
			<AspectRatio
				width={theme.fontSizes['5xl']}
				height={theme.fontSizes['5xl']}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				ratio={1 / 1}
			>
				<Image
					alt={`${t(`home.icons.${icon}.label`)}`}
					width='inherit'
					height='inherit'
					fit='contain'
					borderRadius='none'
					src={{ full: icons[colorMode][icon] }}
				/>
			</AspectRatio>
		</Tooltip>
	);
};

export default HomeIcon;
