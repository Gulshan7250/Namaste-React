import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // const {itemCards} = resInfo?.cards[2]

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines , costForTwoMessage} = resInfo?.cards[2].card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h2>Menu</h2>

      {categories.map((category, index) => {
        const itemCards = category?.card?.card?.itemCards;
        const title = category?.card?.card?.title;

        // Agar is category mein items nahi hain toh skip kar do
        if (!itemCards) return null;

        return (
          <div key={index}>
            <h3>{title}</h3>
            <ul>
              {itemCards.map((item) => {
                const info = item.card.info;
                return (
                  <li key={info.id}>
                    {info.name} - ₹
                    {info.price
                      ? info.price / 100
                      : info.defaultPrice / 100}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
