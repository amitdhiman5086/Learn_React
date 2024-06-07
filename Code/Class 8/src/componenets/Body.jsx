import { restaurentList } from "./config";
import RestrountCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import React from "react";

function filterData(searchText, restaurentList) {
  const filterData = restaurentList.filter((res) => {
    //   console.log(res.info.name) ;
    return res.info.name.includes(searchText);
  });
  //   console.log(final) ;
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [restaurent, setRestaurent] = useState([]);
  //   const [btnChange, setBtnChange] = useState("10");
  useEffect(() => {
    // console.log("Render on depending someone else");
    getResturant();
  }, []);

  async function getResturant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
    setRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return ( restaurent.length == 0) ? (
    <Shimmer/>
  ) : (
    <>
      <div>
        <input
          type="text"
          className="search-Input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            //filter the Restaurents
            const data = filterData(searchText, restaurentList);
            setRestaurent(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restro-cards">
        {restaurent.map((res) => {
          return <RestrountCard {...res.info} key={res.info.id} />;
        })}
        {
          //Rember to res is returning one not restaurentList
        }
        {/* <RestrountCard res={restaurentList[0]} />
        <RestrountCard res={restaurentList[1]} />
        <RestrountCard res={restaurentList[2]} />
        <RestrountCard res={restaurentList[3]} />
        <RestrountCard res={restaurentList[4]} />
        <RestrountCard res={restaurentList[5]} />
        <RestrountCard res={restaurentList[6]} />
        <RestrountCard res={restaurentList[7]} />
        <RestrountCard res={restaurentList[8]} /> */}
        {/* <RestrountCard res={restaurentList[9]} /> */}
      </div>
    </>
  );
};

export default Body;
