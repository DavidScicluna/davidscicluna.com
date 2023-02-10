import { FC } from 'react';

import { useTheme, Tooltip, utils } from '@davidscicluna/component-library';

import { useBoolean, Center } from '@chakra-ui/react';

import { CSS as CSSIcon } from '../../../../common/assets/icons';
import { useUserTheme } from '../../../../common/hooks';

const { getColor } = utils;

const HomeCSSIcon: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label='CSS (tooltip)'
			colorMode={colorMode}
			isOpen={isHovering}
			placement='top'
			label='CSS'
			gutter={12}
		>
			<Center
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				fill={getColor({ theme, colorMode, type: 'text.secondary' })}
			>
				<CSSIcon
					style={{
						width: theme.fontSizes['5xl'],
						height: theme.fontSizes['5xl'],
						fontSize: theme.fontSizes['5xl']
					}}
				/>
			</Center>
		</Tooltip>
	);
};

export default HomeCSSIcon;
