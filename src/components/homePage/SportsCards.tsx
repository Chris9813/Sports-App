import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { sportAddNew, sportDelete } from '../../actions/sports';
import { DataSports, stateInter } from '../../interfaces/interfaces';
import {useSpring, config, animated} from "react-spring"
import Like from '../like/Like';


type tableArgs = {
  dataSports: DataSports
}

export const SportsCards = ({dataSports}:tableArgs) => {

  const springWidth = useSpring({
    from:{width: "40px"},
    width: "200px",
    config: config.gentle
  })

    const {favorites} = useSelector((state:stateInter) => state.sports)
    const dispatch = useDispatch()
    const history = useHistory()
 
    const {idSport, strSport, strSportThumb} = dataSports;
    
    const handleClick = (strSport:string, strSportThumb:string) => {
      dispatch(sportAddNew(strSport, strSportThumb))
  
    }

    const handleSport = (idSport:number) => {
      history.push(`./homepage/${idSport}`)
    }
    

  return ( <div className="align-content-center my-3 mx-4 ">
        <div className="card animate__animated animate__fadeInUpBig">
          <img src={strSportThumb} className="card-img-top" alt="..." style={{height: "10rem"}}/>
          <div className="card-body">
            <h5 style={{cursor: "pointer"}}  onClick={() => handleSport(idSport)} className="card-title">{strSport}</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <div className='d-flex justify-content-center'>
            <button style={{color:"#3b83bd", borderRadius:"12px", border:"none"}} onClick={() => handleClick(strSport, strSportThumb)} 
            className={`btn btn-outline-info mx-3 animate__animated animate__bounceIn`}>
              <Like />
              </button>
          </div>
          </div>
        </div>
      </div>
    
  )
}
