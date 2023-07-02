import { Button, useTheme } from '@davidscicluna/component-library';

import { Center, useMediaQuery } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';

import Error from '../containers/Error';
import { useLayoutContext } from '../containers/Layout/common/hooks';

const Error500Page = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const { navigationHeight } = useLayoutContext();

	const { innerHeight: windowHeight = 0 } = useWindowSize();

	return (
		<Center
			width='100%'
			minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${navigationHeight}px)`}
		>
			<Error
				code={500}
				title={`${t('error500.title')}`}
				subtitle={`${t('error500.subtitle')}`}
				renderActions={(props) => (
					<Button {...props} isFullWidth={isSm} onClick={() => window.location.reload()} variant='outlined'>
						{`${t('error500.action1')}`}
					</Button>
				)}
			/>
		</Center>
	);
};

export default Error500Page;
