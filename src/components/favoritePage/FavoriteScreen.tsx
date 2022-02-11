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

    const data = useMemo(() => getterById(sports,favorites), [sports,favorites])
    

    console.log(data)

  return (
    <div>
    {
    data && data.map((item:DataSports, i:number) => {
        return <FavoriteCards dataSports={item} />
    })
    }
</div>
  )
}
