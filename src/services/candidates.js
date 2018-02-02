// // // // // // // // // // // // 
//
//	Candidates Services
//
// // // // // // // // // // // // 

import { 
    setCurrentState, 
    getCandidates, 
    displayCandidates, 
} from 'actions/map';
import { getFullName } from 'utils/states';

let store;


export function updateState(state) {
    store.dispatch(setCurrentState(state));
    store.dispatch(getCandidates(getFullName(state)))
         .then(() => {
             store.dispatch(displayCandidates());
         });
};



export default function(storeObj) {
    store = storeObj;
}