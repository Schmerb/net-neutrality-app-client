// // // // // // // // // //
//
//      Map - Actions
//
// // // // // // // // // //

// * * * * * * * * * * * * * * *
// Sets current state
// * * * * * * * * * * * * * * *
export const SET_CURRENT_STATE = 'SET_CURRENT_STATE';
export const setCurrentState = currentState => ({
    type: SET_CURRENT_STATE,
    currentState
});