import { createStore } from 'redux';
import { combineReducers } from 'redux';

import generalReducer from './reducers/generalReducer';

const rootReducer = combineReducers({
    general: generalReducer,
});

const store = createStore(rootReducer);

export default store;