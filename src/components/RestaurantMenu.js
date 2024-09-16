import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import constants from "../utils/constants";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const resId = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(constants.MENU_API + resId);

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ol>
        {itemCards.map((e) => (
          <li key={e.card.info.id}>
            {e.card.info.name} -
            {e.card.info.defaultPrice / 100 || e.card.info.price / 100} {" Rs."}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ResMenu;
