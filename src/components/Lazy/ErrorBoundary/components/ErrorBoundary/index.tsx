import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';

import Error from '../../../../../containers/Error';
import { useLayoutContext } from '../../../../../containers/Layout/common/hooks';
import ErrorBoundaryActions from '../ErrorBoundaryActions';

const ErrorBoundary: FC = () => {
	const { t } = useTranslation();

	const { height = 0 } = useLayoutContext();

	const { innerHeight: windowHeight } = useWindowSize();

	return (
		<Center width='100%' minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${height}px)`}>
			<Error
				code={404}
				title={`${t('components.errorBoundary.title')}`}
				subtitle={`${t('components.errorBoundary.subtitle')}`}
				renderActions={(props) => <ErrorBoundaryActions {...props} />}
			/>
		</Center>
	);
};

export default ErrorBoundary;
