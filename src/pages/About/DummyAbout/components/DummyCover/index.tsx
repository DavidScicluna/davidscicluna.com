import { FC } from 'react';

import { useTheme, Skeleton, utils } from '@davidscicluna/component-library';

import { Center, AspectRatio } from '@chakra-ui/react';

import { useUserTheme } from '../../../../../common/hooks';

const { getColor } = utils;

const DummyCover: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	return (
		<Center
			width='100%'
			position='relative'
			borderBottomWidth='2px'
			borderBottomStyle='solid'
			borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
			overflowX='hidden'
			overflowY='hidden'
		>
			<AspectRatio width='100%' height='auto' ratio={21 / 9}>
				<Skeleton colorMode={colorMode} borderRadius='none' isLoaded={false} variant='rectangle' />
			</AspectRatio>

			<AspectRatio width='35%' height='auto' position='absolute' bottom={0} zIndex={1} ratio={1 / 1}>
				<Skeleton colorMode={colorMode} isLoaded={false} variant='circle' />
			</AspectRatio>
		</Center>
	);
};

export default DummyCover;
