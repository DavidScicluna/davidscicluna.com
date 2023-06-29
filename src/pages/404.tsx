import { Button, useTheme } from '@davidscicluna/component-library';

import { Center, useMediaQuery } from '@chakra-ui/react';

import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';

import Seo from '../components/seo';
import Error from '../containers/Error';
import { useLayoutContext } from '../containers/Layout/common/hooks';

const Error404Page = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const { navigationHeight } = useLayoutContext();

	const { innerHeight: windowHeight = 0 } = useWindowSize();

	return (
		<Center
			width='100%'
			minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${navigationHeight}px)`}
		>
			<Error
				code={404}
				title={`${t('noMatch.title')}`}
				subtitle={`${t('noMatch.subtitle')}`}
				renderActions={(props) => (
					<>
						<Link to='/'>
							<Button {...props} isFullWidth={isSm} variant='outlined'>
								{`${t('noMatch.action1')}`}
							</Button>
						</Link>

						<Button {...props} isFullWidth={isSm} onClick={() => window.location.reload()}>
							{`${t('noMatch.action2')}`}
						</Button>
					</>
				)}
			/>
		</Center>
	);
};

export const Head = () => <Seo title='404: Not Found' />;

export default Error404Page;
