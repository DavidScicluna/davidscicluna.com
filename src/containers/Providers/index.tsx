import { FC } from 'react';

import { DSCLProviderProps as ProvidersProps } from '@davidscicluna/component-library';

import { wrapper, persistor } from '@/store';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Provider from '../Provider';

const Providers: FC<ProvidersProps> = ({ children, ...rest }) => {
	const { store } = wrapper.useWrappedStore(rest);

	return (
		<StoreProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Provider>{children}</Provider>
			</PersistGate>
		</StoreProvider>
	);
};

export default Providers;
