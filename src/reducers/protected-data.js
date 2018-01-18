// // // // // // // // // //
//
//   Protected Data - Reducer
//
// // // // // // // // // //

import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    CLEAR_USER_DATA
} from 'actions/protected-data';

const initialState = {
    data: '',
    user: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PROTECTED_DATA_SUCCESS:
            return {...state, data: action.data, error: null};
        case FETCH_PROTECTED_DATA_ERROR:
            return {...state, error: action.error};
        case GET_USER_SUCCESS:
            return {
                ...state, 
                user: action.user,
                error: null
            };
        case GET_USER_ERROR:
            return {...state, error: action.error};
        case UPDATE_USER_SUCCESS:
            return {
                ...state, 
                user: action.user,
                error: null
            };
        case UPDATE_USER_ERROR:
            return {...state, error: action.error};
        case CLEAR_USER_DATA:
            return initialState;
        default:
            return state;
    }
}
