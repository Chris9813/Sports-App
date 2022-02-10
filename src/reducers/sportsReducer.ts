import { types } from "../types/types";

const initialState = {
  sport: [],
};

export const sportsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case types.SportsAdd:
      return {
        ...state,
        sports: [action.payload, ...state.sport],
      };

    case types.sportsLoaded:
      return {
        ...state,
        sports: [...action.payload],
      };

    default:
      return state;
  }
};
