import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sportsStartLoading } from '../../actions/sports'
import { getterById } from '../../getters/getterById'
import { DataSports, stateInter } from '../../interfaces/interfaces'
import { FavoriteCards } from './FavoriteCards'




export const FavoriteScreen = () => {

  const dispatch = useDispatch()
  const {sports, favorites} = useSelector((state:stateInter) => state.sports)
  useEffect(() => {
      dispatch(sportsStartLoading())
    }, [])

    

  return (
    <div>
    {
    favorites && favorites.map((item:any, i:number) => {
        return <FavoriteCards dataSports={item} />
    })
    }
</div>
  )
}
