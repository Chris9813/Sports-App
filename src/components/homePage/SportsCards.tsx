import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sportAddNew, sportDelete } from '../../actions/sports';
import Like from '../like/Like';

export const SportsCards = ({dataSports}:any) => {

    const {favorites} = useSelector((state:any) => state.sports)
    const dispatch = useDispatch()
 
    const {idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb} = dataSports;
    console.log(idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb)
    
    const handleClick = (idSport:number) => {
        if(!favorites.includes(idSport)){
            dispatch(sportAddNew(idSport))
        } else{
            dispatch(sportDelete(idSport))
        }
        
    }
    

  return ( <div className="card align-content-center my-3 mx-4">
        <div className="card">
          <img src={strSportThumb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{strSport}</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <p onClick={() => handleClick(idSport)} className='mx-4'><Like /></p>
            
          </div>
        </div>
      </div>
    
  )
}
