import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRes,setListOfRes]=useState([]);

  const [filterRes,setFilterRes]= useState([]);

  const [searchtext,setSearchtext]=useState("");
  

  useEffect(()=> {
    fetchData();
  } , [])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

    return listOfRes.length===0 ?
     <Shimmer/> : (
      <div className='body'>
        
        <div className='filter'>
          
          <div className="search">
            <input 
              type="text" 
              placeholder="search Resturant" 
              value ={searchtext} 
              className="search-box" 
              onChange={(e) => {
                setSearchtext(e.target.value);
            }}/>

            <button className="searchBtn" 
              onClick={()=>{
              console.log(searchtext);
              const filteredrestro = listOfRes.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase()))
              setFilterRes(filteredrestro);
            }}>search</button>

          </div>
          
          <button 
            className="filter-btn" 
            onClick={()=>{
                const fList = listOfRes.filter((res)=>res.info.avgRating > 4);
                setFilterRes(fList)
            }}>Top Rated Resturants</button>
            
            <button 
              className="filter-btn" 
              onClick={()=>{setFilterRes(listOfRes);
                setSearchtext("");}}>
            Show All Restaurants
            </button>
        </div>
  
        <div className='res-container'>
          {
            filterRes.map(e =><ResturantCard key={e.info.id} resObj={e}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;