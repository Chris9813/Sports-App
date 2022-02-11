import React from 'react'
import { Link } from 'react-router-dom';
import { DataSports } from '../../interfaces/interfaces'


type tableArgs = {
    dataSports: DataSports
  }

export const Cards = ({dataSports}:tableArgs) => {

    const {idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb} = dataSports;

  return (
    <div className='d-flex justify-content-center'>
      <div className="card" style={{width: "30rem"}}>
  <img src={strSportThumb} className="card-img-top" style={{height: "10rem", width:"30rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{strSport}</h5>
    <p className="card-text">{strSportDescription}</p>

  </div>
</div>
    </div>
  )
}
