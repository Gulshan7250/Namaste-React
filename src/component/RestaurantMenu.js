import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4886658&lng=77.5010259&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  // const {itemCards} = resInfo?.cards[2]

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[2].card?.card?.info;

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
