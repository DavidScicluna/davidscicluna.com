import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createCompressor from 'redux-persist-transform-compress';
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';

import slices from './slices';

const compressor = createCompressor();

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['modals'],
	transforms: [compressor]
};

const persistedReducer = persistReducer(persistConfig, slices);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.GATSBY_ENV === 'dev',
	middleware: [createStateSyncMiddleware(persistConfig)]
});

const persistor = persistStore(store);

initStateWithPrevTab(store);

export { store, persistor };
