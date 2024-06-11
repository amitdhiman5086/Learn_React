import { restaurentList } from "./config";
import RestrountCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import React from "react";
import { filterData } from "../utils/filterdata";
import useOffline from "../utils/useOffline";

const Body = () => {
  const [allrestaurent, setAllRestaurent] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredrestaurent, setFilteredRestaurent] = useState([]);
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
    setAllRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOffline();

  if (isOnline) {
    return <h1>🔴You are offline,Check your internet Connection</h1>;
  }

  //Early Return  ---
  if (!allrestaurent) return null;
  //if Not Found
  // if (filteredrestaurent?.length == 0)
  //   return <h1>No Such Restaurent here !</h1>;

  return allrestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex  bg-cyan-200 justify-center">
        <input
          type="text"
          className=" m-2  bg-slate-100 text-black focus:bg-cyan-200  rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-400 rounded-md  text-white p-3 m-3 hover:bg-blue-800"
          onClick={(e) => {
            //filter the Restaurents
            const data = filterData(searchText, allrestaurent);
            setFilteredRestaurent(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredrestaurent.map((res) => {
          return (
            <Link to={"/restaurent/" + res.info.id} key={res.info.id}>
              <RestrountCard {...res.info} />
            </Link>
          );
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
