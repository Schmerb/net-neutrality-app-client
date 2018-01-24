// // // // // // // // // // // // 
//
//	Session Storage
//
// // // // // // // // // // // // 


// * * * * * * * * * * * * * * * 
//      Map / Candidates
// * * * * * * * * * * * * * * * 

// saves current store state in session
export const saveMapStore = store => {
    return sessionStorage.setItem('store', store);
};

// returns current store state from session
export const getMapStore = store => {
    return sessionStorage.getItem('store');
};

// removes store state from session
export const clearMapStore = store => {
    return sessionStorage.removeItem('store');
};