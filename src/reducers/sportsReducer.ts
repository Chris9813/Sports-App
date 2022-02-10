import { types } from "../types/types";

const initialState = {
  favorites:[],
};

export const sportsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case types.SportsAdd:
      
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };

    case types.sportsLoaded:
      return {
        ...state,
        sports: [...action.payload],
      };
    
    case types.SportsDelete:
      return {
        ...state,
        favorites: state.favorites.filter((e:any) => e !== action.payload),
      }

    default:
      return state;
  }
};
