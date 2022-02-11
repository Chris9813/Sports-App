import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sportsStartLoading } from '../../actions/sports'
import {  stateInter } from '../../interfaces/interfaces'
import { FavoriteCards } from './FavoriteCards'



export const FavoriteScreen = () => {

  const dispatch = useDispatch()
  const {sports, favorites} = useSelector((state:stateInter) => state.sports)
  useEffect(() => {
      dispatch(sportsStartLoading())
    }, [])


  return (
    <div>
      <h1 >History</h1>
      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    {
    favorites && favorites.map((item:any, i:number) => {
        return <FavoriteCards dataSports={item} key={i} />
    })
    }
</div>
  )
}
