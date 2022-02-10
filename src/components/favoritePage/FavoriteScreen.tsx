import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sportsStartLoading } from '../../actions/sports'

export const FavoriteScreen = () => {

  const dispatch = useDispatch()
  const {sports, favorites} = useSelector((state:any) => state.sports)
  useEffect(() => {
      dispatch(sportsStartLoading())
    }, [])

    const data = sports.filter((item:any) => favorites.includes(item.idSport))
    console.log(data)

  return (
    <div>FavoriteScreen</div>
  )
}
