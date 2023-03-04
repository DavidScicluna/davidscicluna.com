import { FC } from 'react';

import { useTheme, InternalLink, Button } from '@davidscicluna/component-library';

import { useMediaQuery, Center } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';

import Error from '../../../Error';
import { useLayoutContext } from '../../../Layout/common/hooks';

const NoMatch: FC = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const { height } = useLayoutContext();

	const { innerHeight: windowHeight } = useWindowSize();

	return (
		<Center width='100%' minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${height}px)`}>
			<Error
				code={404}
				title={`${t('noMatch.title')}`}
				subtitle={`${t('noMatch.subtitle')}`}
				renderActions={(props) => (
					<>
						<InternalLink to='/' isFullWidth={isSm}>
							<Button {...props} isFullWidth variant='outlined'>
								{`${t('noMatch.action1')}`}
							</Button>
						</InternalLink>

						<Button {...props} isFullWidth={isSm} onClick={() => window.location.reload()}>
							{`${t('noMatch.action2')}`}
						</Button>
					</>
				)}
			/>
		</Center>
	);
};

export default NoMatch;
