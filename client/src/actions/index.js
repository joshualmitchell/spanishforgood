import axios from "axios";
import { FETCH_USER, SET_ACTIVE_PAGE } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const setActivePage = activePage => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage
  };
};
