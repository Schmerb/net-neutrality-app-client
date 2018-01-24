// // // // // // // // // // // // 
//
//	Redux Store
//
// // // // // // // // // // // // 

import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';
import thunk from 'redux-thunk';

import mapReducer           from 'reducers/map';
import displayReducer       from 'reducers/display';

import hydrateService from 'services/hydrate-state';
import candidates     from 'services/candidates';


const store = createStore(
    combineReducers({
        display: displayReducer,
        map: mapReducer
    }),
    applyMiddleware(thunk)
);

// SERVICES


// Hydrate stores from sessionStorage
hydrateService(store);

// allows new US-State change actions to be 
// dispatched from anywhere in app
candidates(store);

export default store;