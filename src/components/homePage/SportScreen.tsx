import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sportsStartLoading } from '../../actions/sports'
import { getterById } from '../../getters/getterById'
import { DataSports, stateInter } from '../../interfaces/interfaces'
import { Cards } from './Cards'

export const SportScreen = () => {


  const {sportId}:any = useParams()
  const dispatch = useDispatch()
  const {sports} = useSelector((state:stateInter) => state.sports)
  useEffect(() => {
      dispatch(sportsStartLoading())
    }, [])

    const data = useMemo(() => getterById(sports,sportId), [sports,sportId])
    

  console.log(data)


  return (
    <div className='continer animate__animated animate__fadeInUpBig'>
    {
      data.map((item:DataSports, i:number) => {
      return <Cards dataSports={item} key={i} />
    })
  }
  </div>
  )
}
