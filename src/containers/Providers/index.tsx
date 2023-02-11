import { FC } from 'react';

import { DSCLProvider } from '@davidscicluna/component-library';

import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../../store';
import Container from '../Container';

const persistor = persistStore(store);

const Providers: FC = () => {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<DSCLProvider>
					<Container />
				</DSCLProvider>
			</PersistGate>
		</ReduxProvider>
	);
};

export default Providers;
