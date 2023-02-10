import { FC } from 'react';

import { useTheme, Tooltip, utils } from '@davidscicluna/component-library';

import { useBoolean, Center } from '@chakra-ui/react';

import { HTML as HTMLIcon } from '../../../../common/assets/icons';
import { useUserTheme } from '../../../../common/hooks';

const { getColor } = utils;

const HomeHTMLIcon: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label='HTML (tooltip)'
			colorMode={colorMode}
			isOpen={isHovering}
			placement='top'
			label='HTML'
			gutter={12}
		>
			<Center
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				fill={getColor({ theme, colorMode, type: 'text.secondary' })}
			>
				<HTMLIcon
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

export default HomeHTMLIcon;
