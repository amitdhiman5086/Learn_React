import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./config";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurent";
import { useDispatch } from "react-redux";
import { additem, removeOne } from "../utils/cartSlicing";

const RestaurentMenu = () => {
  const { id } = useParams();
  console.log(id);

  // const [restaurant, setRestaurent] = useState({});
  const restaurant = useRestaurent(id);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(additem(item));
  };


  // console.log(
  //   restaurant.cards?.[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards
  // );
  const itemCards =
    restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || {};

  // console.log(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  return !Object.values(restaurant).length ? (
    <Shimmer />
  ) : (
    <div className="p-2 m-2 flex justify-around h-auto ">
      <div className="">
        <h1 className="m-2 font-bold text-2xl">
          {restaurant.cards?.[2].card.card.info.name}
        </h1>
        <img
          className="m-2 h-52 w-52 rounded-md"
          alt={restaurant.cards?.[2].card.card.info.name}
          src={IMG_CDN + restaurant.cards?.[2].card.card.info.cloudinaryImageId}
        ></img>
        <h1 className="m-2 font-bold text-xl">
          {restaurant.cards?.[2].card.card.info.avgRating}
        </h1>
        <h1 className="m-2 font-bold text-xl">
          {restaurant.cards?.[2].card.card.info.costForTwoMessage}
        </h1>
      </div>
      <div className="font-bold">
        <h1 className="text-2xl">Menu</h1>
        <ul className="list-disc ">
          {Object.values(itemCards).map((item) => (
            <li key={item?.card?.info?.id}>
              {" "}
              {item?.card?.info?.name}{" "}
              <button
                className="m-4 bg-gray-800 p-3 rounded-md text-white hover:bg-black hover:text-white"
                onClick={() => handleCart(item?.card?.info)}
              >
                Add Item
              </button>{" "}

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
