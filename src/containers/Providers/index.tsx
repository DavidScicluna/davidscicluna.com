import { FC } from 'react';

import { DSCLProviderProps as ProvidersProps } from '@davidscicluna/component-library';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../../store';
import Provider from '../Provider';

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<StoreProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Provider>{children}</Provider>
			</PersistGate>
		</StoreProvider>
	);
};

export default Providers;
