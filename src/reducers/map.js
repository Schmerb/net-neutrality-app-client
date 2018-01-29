// // // // // // // // // //
//
//      Map - Reducer
//
// // // // // // // // // //

import { 
    SET_CURRENT_STATE,
    SET_LOADING,
    GET_CANDIDATES_SUCCESS,
    GET_CANDIDATES_ERROR,
    CLEAR_CANDIDATES,
    RESET_STATE,
    DISPLAY_CANDIDATES
} from 'actions/map';


const initialState = {
    currentState: 'select-state',
    house: [],
    senate: [],
    loading: false,
    display: false,
    error: null
};

//
// USMap Reducer
//
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESET_STATE:
            return initialState;
        case SET_CURRENT_STATE:
            return {
                ...state,
                currentState: action.currentState
            };
        case GET_CANDIDATES_SUCCESS: 
            return {
                ...state,
                house: action.house,
                senate: action.senate,
                loading: false
            }
        case GET_CANDIDATES_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_CANDIDATES:
            return {
                ...state,
                house: [],
                senate: [],
                loading: true
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case DISPLAY_CANDIDATES:
            return {
                ...state,
                display: true
            };
        default:
            return state;
    }
}
