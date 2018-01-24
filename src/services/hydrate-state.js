// // // // // // // // // // // // 
//
//	Hydrate State
//
// // // // // // // // // // // // 

import { getMapStore } from 'utils/session-storage';

let store;

export function clearState() {
};

export function hydrateState() {
};


export default function(storeObj) {
    store = storeObj;

    // store.subscribe(() => {
    //     let state = store.getState();
    //     console.log(state.protectedData);
    // });

    hydrateState();
}