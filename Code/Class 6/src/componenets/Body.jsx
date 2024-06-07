import { restaurentList } from "./config";
import RestrountCard from "./RestaurentCard";
import { useState } from "react";
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
  const [restaurent, setRestaurent] = useState(restaurentList);
  //   const [btnChange, setBtnChange] = useState("10");
  return (
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
