import { combineReducers } from 'redux';
import { withReduxStateSync } from 'redux-state-sync';

import app from './App';
import modals from './Modals';

const rootReducer = combineReducers({ app, modals });

export default withReduxStateSync(rootReducer);
