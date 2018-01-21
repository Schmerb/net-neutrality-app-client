// // // // // // // // // //
//
//      Map - Reducer
//
// // // // // // // // // //

import { 
    SET_CURRENT_STATE,
    GET_CANDIDATES_SUCCESS,
    GET_CANDIDATES_ERORR,
    DISPLAY_CANDIDATES
} from 'actions/map'

const initialState = {
    currentState: 'select-state',
    house: [],
    senate: [],
    display: false,
    error: null
};

//
// Display Reducer
//
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_STATE:
            return {
                ...state,
                currentState: action.currentState
            };
        case GET_CANDIDATES_SUCCESS: 
            return {
                ...state,
                house: action.house,
                senate: action.senate
            }
        case GET_CANDIDATES_ERORR:
            return {
                ...state,
                error: action.error
            }
        case DISPLAY_CANDIDATES:
            return {
                ...state,
                display: true
            };
        default:
            return state;
    }
}
