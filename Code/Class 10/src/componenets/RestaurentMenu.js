import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./config";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const params = useParams();
  console.log(params);

  const [restaurant, setRestaurent] = useState({});

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        params.id
    );
    const json = await data.json();

    console.log(json.data);

    setRestaurent(json?.data);
  }
  // console.log(
  //   restaurant.cards?.[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards
  // );
  const itemCards =
    restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || {};

  // console.log(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  return (!Object.values(restaurant).length) ? <Shimmer/> : (
    <div className="restaurent-menu">
      <div>
        <h1>{restaurant.cards?.[2].card.card.info.name}</h1>
        <img
         alt={restaurant.cards?.[2].card.card.info.name}
          src={IMG_CDN + restaurant.cards?.[2].card.card.info.cloudinaryImageId}
          ></img>
          <h1>{restaurant.cards?.[2].card.card.info.avgRating}</h1>
          <h1>{restaurant.cards?.[2].card.card.info.costForTwoMessage}</h1>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(itemCards).map((item) => (
            <li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
