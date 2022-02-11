import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sportAddNew } from '../../actions/sports';
import { DataSports } from '../../interfaces/interfaces'
import Like from '../like/Like';


type tableArgs = {
    dataSports: DataSports
  }

export const Cards = ({dataSports}:tableArgs) => {

  const dispatch = useDispatch()

    const {idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb} = dataSports;
    const handleClick = (strSport:string, strSportThumb:string) => {
      dispatch(sportAddNew(strSport, strSportThumb))
  
    }
  return (
    <div className='d-flex justify-content-center'>
      <div className="card" style={{width: "30rem"}}>
  <img src={strSportThumb} className="card-img-top" style={{height: "15rem", width:"30rem"}} alt="..."/>
  <div className="card-body">
    <div className='d-flex justify-content-center'>
  <button style={{color:"#3b83bd", borderRadius:"12px", border:"none"}} onClick={() => handleClick(strSport, strSportThumb)} className='btn btn-outline-info mx-3'><Like /></button>
  </div>
    <h5 className="card-title">{strSport}</h5>
    <p className="card-text" style={{color:"black"}}>{strSportDescription}</p>
    
  </div>
</div>
    </div>
  )
}
