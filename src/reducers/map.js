// // // // // // // // // //
//
//      Map - Reducer
//
// // // // // // // // // //

import { 
    SET_CURRENT_STATE,
    GET_CANDIDATES_SUCCESS,
    GET_CANDIDATES_ERROR,
    GET_SOURCES_HOUSE,
    GET_SOURCES_SENATE,
    GET_SOURCES_ERROR,
    DISPLAY_CANDIDATES
} from 'actions/map'

const initialState = {
    currentState: 'select-state',
    house: [],
    senate: [],
    houseSources: [],
    senateSources: [],
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
        case GET_CANDIDATES_ERROR:
            return {
                ...state,
                error: action.error
            }
        case GET_SOURCES_HOUSE:
            return {
                ...state,
                houseSources: action.houseSources
            };
        case GET_SOURCES_SENATE:
            return {
                ...state,
                senateSources: action.senateSources
            };
        case GET_SOURCES_ERROR:
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
