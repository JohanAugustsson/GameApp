

const initialState = {
  fetching: false,
  fetched: false,
  data: {'name': 'johan'},
  error: {}
};

export const SET_USER_DATA = 'SET_USER_DATA';
export const FETCHING_USER_DATA = 'FETCHING_USER_DATA';
export const ERROR_FETCHING_USER_DATA = 'ERROR_FETCHING_USER_DATA';


const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: { ...payload },
        fetching: false,
        fetched: true,
      };
    case FETCHING_USER_DATA:
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    case ERROR_FETCHING_USER_DATA:
      return {
        ...state,
        error: { ...payload },
        fetching: false,
        fetched: true,
      };
    default:
      return state;
  }
};

export default user;
