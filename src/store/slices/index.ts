import { combineReducers } from 'redux';
import { withReduxStateSync } from 'redux-state-sync';

import app from './app';
import modals from './modals';

const rootReducer = combineReducers({ app, modals });

export default withReduxStateSync(rootReducer);
