import { Component, ErrorInfo } from 'react';

import i18n from '../../../common/scripts/i18n';

import Error from './components/ErrorBoundary';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false
	};

	public static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(`${i18n.t('components.errorBoundary.console')}`, error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <Error />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
