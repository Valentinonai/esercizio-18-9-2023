import { CREATE_LIST } from "../actions";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST: {
      return {
        ...state,
        content: action.payload,
      };
    }
    default:
      return state;
  }
};

export default jobsReducer;
