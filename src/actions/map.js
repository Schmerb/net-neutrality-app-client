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
// Sets display boolean to true
// to display lists
// * * * * * * * * * * * * * * *
export const DISPLAY_CANDIDATES = 'DISPLAY_CANDIDATES';
export const displayCandidates = () => ({
    type: DISPLAY_CANDIDATES
});


// * * * * * * * * * * * * * * *
// Adds candidates to store
// * * * * * * * * * * * * * * *
export const GET_CANDIDATES_SUCCESS = 'GET_CANDIDATES_SUCCESS';
export const getCandidatesSuccess = candidates => ({
    type: GET_CANDIDATES_SUCCESS,
    house: candidates.house,
    senate: candidates.senate
});
export const GET_CANDIDATES_ERROR = 'GET_CANDIDATES_ERROR';
export const getCandidatesError = error => ({
    type: GET_CANDIDATES_ERROR,
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


// // // // // // // // // //
//
//      Sources
//
// // // // // // // // // //


// * * * * * * * * * * * * * * *
// Adds house candidates to 
// store
// * * * * * * * * * * * * * * *
export const GET_SOURCES_HOUSE = 'GET_SOURCES_HOUSE';
export const getSourcesHouse = (candidates) => ({
    type: GET_SOURCES_HOUSE,
    houseSources: candidates
});
// * * * * * * * * * * * * * * *
// Adds senate candidates to 
// store
// * * * * * * * * * * * * * * *
export const GET_SOURCES_SENATE = 'GET_SOURCES_SENATE';
export const getSourcesSenate = (candidates) => ({
    type: GET_SOURCES_SENATE,
    senateSources: candidates
});
export const GET_SOURCES_ERROR = 'GET_SOURCES_ERROR';
export const getSourcesError = error => ({
    type: GET_SOURCES_ERROR,
    error
});
// * * * * * * * * * * * * * * *
// Gets current candidates for
// part of Congress given who
// have quotes for sources
// * * * * * * * * * * * * * * *
export const getSources = (state, congressGroup) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/candidates/${congressGroup}?state=${state}&sources=true`, {
            method: 'GET'
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(congressGroup === 'house') {
                dispatch(getSourcesHouse(res.Candidates2018));
            } else {
                dispatch(getSourcesSenate(res.Candidates2018));
            }
        })
        .catch(err => {
            console.log({message: 'Internal server error', err})
            dispatch(getSourcesError(err));
        })
    );
};