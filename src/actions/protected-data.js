// // // // // // // // // //
//
//   Protected Data - Actions
//
// // // // // // // // // //


import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


//
// Fetches proptected data from db
//
export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});
export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

//
// Get User Data
//
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    user
});
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    error
});

export const getUser = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/me/`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getUserSuccess(data)))
        .catch(err => {
            console.log(err);
            // dispatch(getUserError(err));
        });
};

//
// Updates Users email/phonenumber
//
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = (data) => ({
    type: UPDATE_USER_SUCCESS,
    email: data.email,
    phoneNumber: data.phoneNumber
});
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    error
});

export const updateUser = (updateData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/me/settings`, {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(updateUserSuccess(data)))
        .catch(err => {
            console.log('ERROR: ', err);
            dispatch(updateUserError(err));
        });
};

//
// Clears user data from store
//
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const clearUserData = () => ({
    type: CLEAR_USER_DATA
});
