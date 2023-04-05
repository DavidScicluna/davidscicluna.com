import { FC } from 'react';

import { Skeleton } from '@davidscicluna/component-library';

import { Center, AspectRatio } from '@chakra-ui/react';

import { useUserTheme } from '../../../../../common/hooks';

const DummyCover: FC = () => {
	const { colorMode } = useUserTheme();

	return (
		<Center width='100%' position='relative' overflowX='hidden' overflowY='hidden'>
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
