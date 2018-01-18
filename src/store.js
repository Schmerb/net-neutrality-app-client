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
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';


import { setAuthToken, setCurrentUser }  from 'actions/auth';
import { loadAuthToken } from 'utils/local-storage';

import authReducer          from 'reducers/auth';
import mapReducer           from 'reducers/map';
import displayReducer       from 'reducers/display';
import protectedDataReducer from 'reducers/protected-data';

// import hydrateService from 'services/hydrate-state';


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        display: displayReducer,
        protectedData: protectedDataReducer,
        map: mapReducer
    }),
    applyMiddleware(thunk)
);

// SERVICES


// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const decodedToken = jwtDecode(authToken);
    store.dispatch(setAuthToken(authToken));
    store.dispatch(setCurrentUser(decodedToken.user));
}

// Hydrate stores from MongoDB
// hydrateService(store, authToken);

export default store;