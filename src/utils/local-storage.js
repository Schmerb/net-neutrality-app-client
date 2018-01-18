// // // // // // // // // // // // 
//
//	Local Storage
//
// // // // // // // // // // // // 


// * * * * * * * * * * * * * * * 
//      Authentication
// * * * * * * * * * * * * * * * 
// loads JWT token from localStorage
export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};
// Stores new JWT auth token from localStorage
export const saveAuthToken = authToken => {
    localStorage.setItem('authToken', authToken);
};
// Removes JWT auth token from localStorage
export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
};


// * * * * * * * * * * * * * * * 
//      URL History
// * * * * * * * * * * * * * * * 
// stores current url pathname
export const storeURLPath = pathname => {
    localStorage.setItem('pathname', pathname);
};

// returns previous url pathname
export const getURLPath = pathname => {
    return localStorage.getItem('pathname');
};