// // // // // // // // // //
//
//      Display - Reducer
//
// // // // // // // // // //

import { 
    CONFIRM_MESSAGE,
    CONFIRM_CLASS,
    CONFIRM_REDIRECT,
    FLASH_MESSAGE,
    REMOVE_FLASH_MESSAGE,
    FLASH_MSG_CLASS,
    SET_WIDTH
} from 'actions/display'

const initialState = {
        confirmMsg: null,
        confirmAction: null,
        confirmActionMsg: null,
        confirmClass: '',
        confirmPath: null,
        confirmPathMsg: null,
        flashMsg: null,
        flashClass: '',
        width: window.innerWidth
};

//
// Display Reducer
//
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CONFIRM_MESSAGE:
            return {
                ...state,
                confirmMsg: action.msg,
                confirmAction: action.action,
                confirmActionMsg: action.actionMsg
            };
        case CONFIRM_CLASS:
            return {...state, confirmClass: action.classname};
        case CONFIRM_REDIRECT:
            return {
                ...state, 
                confirmPath: action.path,
                confirmPathMsg: action.msg,
                confirmActionMsg: action.confirmActionMsg,
            };
        case FLASH_MESSAGE:
            return {...state, flashMsg: action.msg};
        case REMOVE_FLASH_MESSAGE:
            return {...state, flashMsg: null};
        case FLASH_MSG_CLASS:
            return {...state, flashClass: action.classname};
        case SET_WIDTH:
            return {...state, width: action.width};
        default:
            return state;
    }
}



