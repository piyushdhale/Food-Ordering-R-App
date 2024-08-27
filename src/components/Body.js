import ReasturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRes,setListOfRes]=useState(resList);
  
    return(
      <div className='body'>
        
        <div className='filter'>
          <button className="filter-btn" 
                  onClick={()=>{
                      const fList = listOfRes.filter((res)=>res.info.avgRating > 4);
                      setListOfRes(fList)
                    }}>Top Rated Resturants</button>
        </div>
  
        <div className='res-container'>
          {
            listOfRes.map(e =><ReasturantCard key={e.info.id} resObj={e}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;