import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducers } from './root-reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducers, undefined, composedEnhancers);
