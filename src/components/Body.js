import ReasturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {

  const [listOfRes,setListOfRes]=useState([]);
  

  useEffect(()=> {
    fetchData();
  } , [])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

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