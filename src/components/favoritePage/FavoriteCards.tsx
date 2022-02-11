import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sportAddNew, sportDelete } from '../../actions/sports';
import { DataSports, stateInter } from '../../interfaces/interfaces';
import DisLike from '../like/DisLike';

type tableArgs = {
    dataSports: DataSports
}

export const FavoriteCards = ({dataSports}:any) => {

    const {favorites}:any = useSelector((state:stateInter) => state.sports)

    const dispatch = useDispatch()
 
    const {name, url, id} = dataSports;
    
    
    const handleClick = (id:any) => {
      dispatch(sportDelete(id))
    }
    
    
    console.log(dataSports.name)

  return ( <div className=" container mb-3 my-5" style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="..." style={{height: "112px", width:"400px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className='d-flex justify-content-end'>
        <p onClick={() => handleClick(id)} className="card-text"> <DisLike /> </p>
        </div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

















