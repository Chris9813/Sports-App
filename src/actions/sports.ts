import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const sportsStartLoading = () => {
  return async (dispatch:any) => {
    try {
      const resp = await fetchSinToken(`/`,{},"GET");
      const body = await resp.json();
      console.log(body);
      dispatch(sportsfinisloading(body.sports));
    } catch (error) {
      console.warn(error);
    }
  };
};

const sportsfinisloading = (sports:any) => ({
    type: types.sportsLoaded,
    payload: sports,
  });