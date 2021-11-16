import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEES,
  API_CALL_ERROR,
  API_CALL_START,
} from './types';

import { searchWithFilters } from 'utils/queries';

export const createUser = data => {
  console.log(data);
  return { type: CREATE_EMPLOYEE, payload: data };
};

export const searchEmployees = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: API_CALL_START,
      payload: 'SEARCH_EMPLOYEES',
    });

    const res = await searchWithFilters(queryParams, '*', 'employees');

    dispatch({
      type: SEARCH_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};

/*
export const searchEmployees = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await employeeService.searchEmployees(queryParams);

    console.log(res)

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};*/

export const updateUser = (id, data) => {
  return { type: UPDATE_EMPLOYEE, payload: id, data };
};

export const deleteUser = id => {
  return { type: DELETE_EMPLOYEE, payload: { id } };
};
