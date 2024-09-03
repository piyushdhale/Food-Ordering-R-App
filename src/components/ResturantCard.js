import constants from "../utils/constants";

const ResturantCard = (props) => {
  
    const {resObj}=props;
  
    const {name,cuisines,avgRating,costForTwo,deliveryTime}=resObj?.info;
    
    return(
      <div className='res-card'>
        <img className=" res-logo " alt="image not loded" 
          src={constants.cloudImage_URL + resObj.info.cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} start*</h4>
        <h4>{costForTwo}</h4>
        <h4>{resObj.info.sla.deliveryTime}minutes</h4>
  
      </div>
    )
  
  }

  export default ResturantCard;