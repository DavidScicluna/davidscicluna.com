import { FC } from 'react';

import { DSCLProvider } from '@davidscicluna/component-library';

import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import i18n from '../../common/scripts/i18n';
import { store, persistor } from '../../store';
import Container from '../Container';

const Providers: FC = () => {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<I18nextProvider i18n={i18n}>
					<DSCLProvider>
						<Container />
					</DSCLProvider>
				</I18nextProvider>
			</PersistGate>
		</ReduxProvider>
	);
};

export default Providers;
