import { actionInter } from "../interfaces/interfaces";
import { types } from "../types/types";


type actionAuth = {
  uid: number,
  displayname: string,
}

export const authReducer = (state = {}, action:actionInter) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayname,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
