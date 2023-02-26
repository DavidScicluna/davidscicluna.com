import { FC } from 'react';

import { useTheme, InternalLink, Button } from '@davidscicluna/component-library';

import { useMediaQuery, Center } from '@chakra-ui/react';

import { useWindowSize } from 'rooks';

import Error from '../../../Error';
import { useLayoutContext } from '../../../Layout/common/hooks';

const NoMatch: FC = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

	const { height } = useLayoutContext();

	const { innerHeight: windowHeight } = useWindowSize();

	return (
		<Center width='100%' minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${height}px)`}>
			<Error
				code={404}
				title='Page not found!'
				subtitle='Please check the URL in the address bar and try again.'
				renderActions={(props) => (
					<>
						<InternalLink to='/' isFullWidth={isSm}>
							<Button {...props} isFullWidth variant='outlined'>
								Go back home
							</Button>
						</InternalLink>

						<Button {...props} isFullWidth={isSm} onClick={() => window.location.reload()}>
							Try again
						</Button>
					</>
				)}
			/>
		</Center>
	);
};

export default NoMatch;
