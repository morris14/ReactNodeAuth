import axios from "axios";
import { USER_LOADED, AUTH_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load user
export const loadUser = () => async dispatch => {
    // If a token is found in localStorage then set axios headers
    if (localStorage.token) setAuthToken(localStorage.token);

    try {
        const res = await axios.get("/api/v1/auth/me");

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
