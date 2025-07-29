const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    locality,
    availability,
  } = info;

  return (
    <div className="flex flex-wrap" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="w-10"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{availability?.opened ? "Open Now" : "Closed"}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
