import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variables - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
// Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState("");
  
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4886658&lng=77.5010259&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const allRestaurants = json?.data?.cards
      ?.map(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      ?.filter(Boolean)
      ?.flat();

    // ✅ Remove duplicates based on info.id
    const uniqueRestaurants = [];
    const seenIds = new Set();

    for (const res of allRestaurants) {
      if (!seenIds.has(res?.info?.id)) {
        seenIds.add(res?.info?.id);
        uniqueRestaurants.push(res);
      }
    }

    setListOfRestaurant(uniqueRestaurants);
    setFilteredRestaurant(uniqueRestaurants);
  };
 
  // Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>;
  // }

  // Normal JS variable
  // let listOfRestaurant = [];

  //uses here ternary opearator
  return listOfRestaurant.length === 0 ? <Shimmer/> :
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=> {setSearchText(e.target.value)}}/>
          <button onClick={()=>{
            // Filter the restaurant card and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant= listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );    
          
          setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" 
         onClick={()=>
          {
           // filter logic here
           const filteredlist = listOfRestaurant.filter(
            (res)=> res.rating>4

          );
          setListOfRestaurant(filteredlist);
          }
        }
         >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => {
          if (!restaurant?.info?.id) return null; // skip if id is missing

          return (
            <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
