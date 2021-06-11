import axios from 'axios';

const smurfAPI = axios.create({
  baseURL: 'http://localhost:3333/smurfs'
});

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

const fetchSuccess = (smurfs) => {
  return {
    type: FETCH_SUCCESS,
    payload: smurfs
  };
};

const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error
  };
};

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    smurfAPI.get('/')
      .then(res => {
        dispatch(fetchSuccess(res));
      })
      .catch(err => {
        dispatch(fetchFail(err.toString()));
      });
  };
};

export const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf
  };
};

export const addError = (error) => {
  return {
    type: ADD_ERROR,
    payload: error
  };
};
