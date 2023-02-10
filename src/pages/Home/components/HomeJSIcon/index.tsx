import { FC } from 'react';

import { useTheme, Tooltip } from '@davidscicluna/component-library';

import { useBoolean, AspectRatio } from '@chakra-ui/react';

import icons from '../../../../common/assets/icons';
import { useUserTheme } from '../../../../common/hooks';
import { Image } from '../../../../components';

const HomeJSIcon: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label='Javascript (tooltip)'
			colorMode={colorMode}
			isOpen={isHovering}
			placement='top'
			label='Javascript'
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
					alt='Javascript'
					width='inherit'
					height='inherit'
					fit='contain'
					borderRadius='none'
					src={{ full: icons[colorMode].js }}
				/>
			</AspectRatio>
		</Tooltip>
	);
};

export default HomeJSIcon;
