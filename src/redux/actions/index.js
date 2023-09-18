export const ADD_COMPANY = "ADD_COMPANY";
export const DELETE_FAV = "DELETE_FAV";
export const CREATE_LIST = "CREATE_LIST";
export const SEARCH_FALSE = "SEARCH_FALSE";
export const PREV_QUERY = "PREV_QUERY";

export const deleteFavourite = (i) => ({ type: DELETE_FAV, payload: i });
export const addFavourite = (data) => ({ type: ADD_COMPANY, payload: data });
export const changeSearch = (bool) => ({ type: SEARCH_FALSE, payload: bool });
export const prevQuery = (data) => ({ type: PREV_QUERY, payload: data });

export const getJobs = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: CREATE_LIST, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const mainSearch = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: CREATE_LIST, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
