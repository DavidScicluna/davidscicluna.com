import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { useWindowSize } from 'rooks';

import { useLayoutContext } from '../Layout/common/hooks';

import { PageProps } from './common/types';

const Page: FC<PageProps> = ({ children }) => {
	const { navigationHeight } = useLayoutContext();

	const { innerHeight: windowHeight } = useWindowSize();

	return (
		<Box width='100%' minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${navigationHeight}px)`}>
			{children}
		</Box>
	);
};

export default Page;
