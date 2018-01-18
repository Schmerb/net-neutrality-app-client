// // // // // // // // // //
//
//      Map - Reducer
//
// // // // // // // // // //

import { 
    SET_CURRENT_STATE
} from 'actions/map'

const initialState = {
    currentState: 'DC'
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
        default:
            return state;
    }
}
