import React from 'react'

export const SportsCards = ({dataSports}:any) => {
 
    const {idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb} = dataSports;
    console.log(idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb)

  return ( <div className="card align-content-center my-3 mx-4">
        <div className="card">
          <img src={strSportThumb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{strSport}</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    
  )
}
