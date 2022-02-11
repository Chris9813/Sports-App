import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sportAddNew, sportDelete } from '../../actions/sports';
import { DataSports, stateInter } from '../../interfaces/interfaces';
import DisLike from '../like/DisLike';
import Like from '../like/Like';

type tableArgs = {
    dataSports: DataSports
}

export const FavoriteCards = ({dataSports}:tableArgs) => {

    const {favorites} = useSelector((state:stateInter) => state.sports)
    const dispatch = useDispatch()
 
    const {idSport, strSport, strSportIconGreen, strSportThumb} = dataSports;
    
    const handleClick = (idSport:number) => {
        if(!favorites.includes(idSport)){
            dispatch(sportAddNew(idSport))
        } else{
            dispatch(sportDelete(idSport))
        }
        
    }
    

  return ( <div className=" container mb-3 my-5" style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={strSportThumb} className="img-fluid rounded-start" alt="..." style={{height: "112px", width:"400px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{strSport}</h5>
        <div className='d-flex justify-content-end'>
        <p onClick={() => handleClick(idSport)} className="card-text"> <DisLike /> </p>
        </div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

















