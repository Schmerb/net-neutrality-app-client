// // // // // // // // // // // // 
//
//	Hydrate State
//
// // // // // // // // // // // // 

import { saveCurrentState, getPrevState } from 'utils/session-storage';
import { updateState } from 'services/candidates';

let store;

export function clearState() {

};

export function hydrateState() {
    let US_State = getPrevState();
    if(US_State && US_State !== '') {
        updateState(US_State);
    }
};

let prevState = '';
function handleStoreChange() {
    let { currentState } = store.getState().map;
    if(currentState !== prevState) {
        prevState = currentState;
        // save to sessionStorage
        saveCurrentState(currentState);
    }
}


export default function(storeObj) {
    store = storeObj;

    
    store.subscribe(handleStoreChange);

    hydrateState();
}