// // // // // // // // // //
//
//      Map - Actions
//
// // // // // // // // // //

import { API_BASE_URL } from 'config';
import { normalizeResponseErrors } from './utils';

// * * * * * * * * * * * * * * *
// Sets current state
// * * * * * * * * * * * * * * *
export const SET_CURRENT_STATE = 'SET_CURRENT_STATE';
export const setCurrentState = (currentState) => {
    console.log('In Action: ', currentState);
    return {
        type: SET_CURRENT_STATE,
        currentState
    }
};


// * * * * * * * * * * * * * * *
// Adds candidates to store
// * * * * * * * * * * * * * * *
export const GET_CANDIDATES_SUCCESS = 'GET_CANDIDATES_SUCCESS';
export const getCandidatesSuccess = candidates => ({
    type: GET_CANDIDATES_SUCCESS,
    house: candidates.house,
    senate: candidates.senate
});
export const GET_CANDIDATES_ERORR = 'GET_CANDIDATES_ERORR';
export const getCandidatesError = error => ({
    type: GET_CANDIDATES_ERORR,
    error
});

// * * * * * * * * * * * * * * *
// Gets current candidates for
// part of Congress given
// * * * * * * * * * * * * * * *
export const getCandidates = (state, congressGroup) => dispatch => {
    congressGroup = congressGroup ? congressGroup : 'all'; // by default returns ALL candidates
    return (
        fetch(`${API_BASE_URL}/candidates/${congressGroup}?state=${state}`, {
            method: 'GET'
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch(getCandidatesSuccess(res.Candidates2018));
        })
        .catch(err => {
            console.log({message: 'Internal server error', err})
            dispatch(getCandidatesError(err));
        })
    );
};