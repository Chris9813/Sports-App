import { useSelector } from "react-redux";
import { db } from "../firebase/firebase-config";
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



  export const sportAddNew = (strSport:any, strSportThumb:any) => {
    return async(dispatch:any, getState:any) => {

      const {uid} = getState().auth

      const newSport = {
        name: strSport,
        url: strSportThumb,
      }
      const doc = await db.collection(`${uid}/sports/favorite`).add( newSport );
      dispatch(sportFinishAddNew(newSport))
    }
  }

  const sportFinishAddNew = (newSport:any) => ({
    type: types.SportsAdd,
    payload: newSport,
  });


  export const startDeleting = (id:string) => {
    return async(dispatch:any, getState:any) => {
        const {uid} = getState().auth;
            await db.doc(`${uid}/sports/favorite/${id}`).delete();
            dispatch(sportDelete(id));
    }
}

  export const sportDelete = (id:any) => ({
    type: types.SportsDelete,
    payload: id,
  });

  export const setFavorite = (notes:any) => ({
    type: types.favoriteLoad,
    payload: notes
  })