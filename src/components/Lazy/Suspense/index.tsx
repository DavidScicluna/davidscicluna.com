import { FC, SuspenseProps, Suspense as RS } from 'react';

import ErrorBoundary from '../ErrorBoundary';

const Suspense: FC<SuspenseProps> = ({ children, fallback, ...rest }) => {
	return (
		<ErrorBoundary>
			<RS {...rest} fallback={fallback}>
				{children}
			</RS>
		</ErrorBoundary>
	);
};

export default Suspense;
