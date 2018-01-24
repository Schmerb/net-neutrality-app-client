// // // // // // // // // // // // 
//
//	Session Storage
//
// // // // // // // // // // // // 


// * * * * * * * * * * * * * * * 
//      Map / Candidates
// * * * * * * * * * * * * * * * 

// saves current store state in session
export const saveCurrentState = state => {
    return sessionStorage.setItem('state', JSON.stringify(state));
};

// returns current state state from session
export const getPrevState = state => {
    return JSON.parse(sessionStorage.getItem('state'));
};

// removes store state from session
export const clearMapStore = store => {
    return sessionStorage.removeItem('store');
};