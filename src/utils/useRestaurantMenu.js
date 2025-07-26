import { useEffect, useState } from "react";
import { MENU_API } from "../utils/contants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 👇 URL is formed like MENU_API + resId + rest
    const url =
      MENU_API +
      resId +
      "&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;