import { useDispatch } from 'react-redux';
import {  startDeleting } from '../../actions/sports';
import { favorites } from '../../interfaces/interfaces';



type tableArgs = {
    dataSports: favorites
}

export const FavoriteCards = ({dataSports}:tableArgs) => {

    const dispatch = useDispatch()
    
    const {name, url, id} = dataSports;
    
    
    const handleClick = (id:string) => {
      dispatch(startDeleting(id))
    }
    
    
    console.log(dataSports.name)

  return ( <div className=" container mb-3 my-5" style={{maxWidth: "600px"}}>
  <div className="row g-0 animate__animated animate__fadeInUpBig">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="..." style={{height: "112px", width:"400px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className='d-flex justify-content-end'>
        <p style={{cursor: "pointer"}} onClick={() => handleClick(id)} className="card-text "> <i style={{color: "#3b83bd"}} className="fa-solid fa-heart fa-xl"></i></p>
        </div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

















