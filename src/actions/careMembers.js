import { toast } from 'react-toastify';
import { searchWithFilters } from 'utils/queries';
import careMemberService from '../services/careMemberService';
import {
  API_CALL_ERROR,
  API_CALL_START,
  CREATE_CARE_MEMBER,
  SEARCH_CARE_MEMBERS,
} from './types';

export const searchCareMembers = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: API_CALL_START,
      payload: 'SEARCH_CARE_MEMBERS',
    });

    const res = await searchWithFilters(queryParams, '*', 'careEmployees');

    dispatch({
      type: SEARCH_CARE_MEMBERS,
      payload: res.data,
    });
    // return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
    // toast.error('Could not connect to server. Contact Administrator');
    // return Promise.reject(err);
  }
};

export const createCareMember = data => dispatch => {
  const { country, employee, offBoardDate, onBoardDate, role } = data;

  try {
    const res = careMemberService.create({
      country,
      employee,
      offBoardDate,
      onBoardDate,
      role,
    });

    dispatch({ type: CREATE_CARE_MEMBER, payload: res.data });

    if (res.status === 201) {
      toast.success('Care Member Created Successfully');
    }
    return Promise.resolve(res.data);
  } catch (error) {
    toast.error('Could not connect to server. Contact Administrator');
    return Promise.reject(error);
  }
};

/** Real Impl */
/*
export const searchCareMembers = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await careMemberService.searchCareMembers(queryParams);

    console.log("/careMembers?" + {queryParams})

    dispatch({
      type: RETRIEVE_CARE_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    toast.error("Could not connect to server. Contact Administrator")
  }
};

export const createCareMember = (data) => async (dispatch) => {

  console.log(data)
  
  const { country, employee, offBoardDate, onBoardDate, role } = data

  try {
    const res = await careMemberService.create({
     country,
     employee,
     offBoardDate,
     onBoardDate,
     role
    })

    dispatch({ type: CREATE_CARE_MEMBER, payload: res.data })

    if(res.status === 201){
      toast.success("Care Member Created Successfully")
    }

    console.log(res)

    return Promise.resolve(res.data)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
*/
