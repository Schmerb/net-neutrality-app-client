// // // // // // // // // // // // 
//
//	Hydrate State
//
// // // // // // // // // // // // 

import { getUser } from 'actions/protected-data';

let store;

// Clear sensitive info from state

// Hydrate with current user whenb logged in


export function clearState() {
};

export function hydrateState() {
    store.dispatch(getUser());
}

export default function(storeObj, authToken) {
    store = storeObj;

    store.subscribe(() => {
        // let state = store.getState();
        // console.log(state.protectedData);
    });
    if(authToken) {
        hydrateState();
    }
}