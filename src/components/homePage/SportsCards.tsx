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
 
    const {idSport, strSport, strSportDescription, strSportIconGreen, strSportThumb} = dataSports;
    
    const handleClick = (idSport:number) => {
        if(!favorites.includes(idSport)){
            dispatch(sportAddNew(strSport, strSportThumb))
        } else{
            dispatch(sportDelete(idSport))
        }
        
    }

    const handleSport = (idSport:number) => {
      history.push(`./homepage/${idSport}`)
    }
    

  return ( <div className="align-content-center my-3 mx-4">
        <div className="card">
          <img src={strSportThumb} className="card-img-top" alt="..." style={{height: "10rem"}}/>
          <div className="card-body">
            <h5 style={{cursor: "pointer"}}  onClick={() => handleSport(idSport)} className="card-title">{strSport}</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <animated.p style={springWidth} onClick={() => handleClick(idSport)} className='mx-4'><Like /></animated.p>
          </div>
        </div>
      </div>
    
  )
}
