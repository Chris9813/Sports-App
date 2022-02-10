import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sportsStartLoading } from '../../actions/sports'
import { SportsCards } from './SportsCards'

export const HomeScreen = () => {


    const dispatch = useDispatch()
    const {sports} = useSelector((state:any) => state.sports)
    useEffect(() => {
        dispatch(sportsStartLoading())
      }, [])
    
    

  return (
    <div className = "row row-cols-4 d-flex justify-content-center cards animate__animated animate__backInDown">
        {
        sports && sports.map((item:any, i:number) => {
            return <SportsCards dataSports={item} />
        })
        }
    </div>
  )
}
