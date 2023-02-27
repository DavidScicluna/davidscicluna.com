import { FC } from 'react';

import { useTheme, Button } from '@davidscicluna/component-library';

import { useMediaQuery } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { ErrorBoundaryActionsProps } from './types';

const ErrorBoundaryActions: FC<ErrorBoundaryActionsProps> = (props) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	return (
		<Button {...props} isFullWidth={isSm} onClick={() => window.location.reload()}>
			{`${t('components.errorBoundary.action')}`}
		</Button>
	);
};

export default ErrorBoundaryActions;
