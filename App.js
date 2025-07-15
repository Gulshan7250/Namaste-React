import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *   - Search Bar
 *   - RestaurantContainer
 *     - RestaurantCard
 *       -img
 *       -Name of Res, Star Rating, cuising, delievery time
 * Footer
 *  -Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, image, rating, deliveryTime } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const resList = [
  {
    id: "r1",
    name: "The Spice Villa",
    rating: 4.3,
    deliveryTime: "30 mins",
    cuisines: ["Indian", "Chinese"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBCtRp_0c8Ou6rg1YEL6aRG-st3ILJKwPBw&s",
  },
  {
    id: "r2",
    name: "Pasta Heaven",
    rating: 4.5,
    deliveryTime: "25 mins",
    cuisines: ["Italian"],
    image: "https://via.placeholder.com/300x200.png?text=Pasta+Heaven",
  },
  {
    id: "r3",
    name: "Burger Shack",
    rating: 4.1,
    deliveryTime: "20 mins",
    cuisines: ["American", "Fast Food"],
    image: "https://via.placeholder.com/300x200.png?text=Burger+Shack",
  },
  {
    id: "r4",
    name: "Sushi World",
    rating: 4.6,
    deliveryTime: "40 mins",
    cuisines: ["Japanese"],
    image: "https://via.placeholder.com/300x200.png?text=Sushi+World",
  },
  {
    id: "r5",
    name: "Tandoori Nights",
    rating: 4.2,
    deliveryTime: "35 mins",
    cuisines: ["Indian", "Tandoori"],
    image: "https://via.placeholder.com/300x200.png?text=Tandoori+Nights",
  },
  {
    id: "r6",
    name: "Vegan Bites",
    rating: 4.0,
    deliveryTime: "22 mins",
    cuisines: ["Vegan", "Healthy"],
    image: "https://via.placeholder.com/300x200.png?text=Vegan+Bites",
  },
  {
    id: "r7",
    name: "Noodle Hub",
    rating: 3.9,
    deliveryTime: "18 mins",
    cuisines: ["Chinese", "Thai"],
    image: "https://via.placeholder.com/300x200.png?text=Noodle+Hub",
  },
  {
    id: "r8",
    name: "The Biryani House",
    rating: 4.7,
    deliveryTime: "27 mins",
    cuisines: ["Indian", "Hyderabadi"],
    image: "https://via.placeholder.com/300x200.png?text=Biryani+House",
  },
  {
    id: "r9",
    name: "Wrap City",
    rating: 4.1,
    deliveryTime: "23 mins",
    cuisines: ["Mexican", "Wraps"],
    image: "https://via.placeholder.com/300x200.png?text=Wrap+City",
  },
  {
    id: "r10",
    name: "Pizza Planet",
    rating: 4.3,
    deliveryTime: "30 mins",
    cuisines: ["Italian", "Pizza"],
    image: "https://via.placeholder.com/300x200.png?text=Pizza+Planet",
  },
  {
    id: "r11",
    name: "Chaat Junction",
    rating: 4.0,
    deliveryTime: "20 mins",
    cuisines: ["Street Food", "Indian"],
    image: "https://via.placeholder.com/300x200.png?text=Chaat+Junction",
  },
  {
    id: "r12",
    name: "Dosa Delight",
    rating: 4.2,
    deliveryTime: "25 mins",
    cuisines: ["South Indian"],
    image: "https://via.placeholder.com/300x200.png?text=Dosa+Delight",
  },
  {
    id: "r13",
    name: "Healthy Bowl",
    rating: 4.5,
    deliveryTime: "28 mins",
    cuisines: ["Healthy", "Salads"],
    image: "https://via.placeholder.com/300x200.png?text=Healthy+Bowls",
  },
  {
    id: "r14",
    name: "BBQ Express",
    rating: 4.4,
    deliveryTime: "32 mins",
    cuisines: ["Barbecue", "Grill"],
    image: "https://via.placeholder.com/300x200.png?text=BBQ+Express",
  },
  {
    id: "r15",
    name: "Kathi Roll Co.",
    rating: 3.8,
    deliveryTime: "19 mins",
    cuisines: ["Indian", "Rolls"],
    image: "https://via.placeholder.com/300x200.png?text=Kathi+Roll+Co",
  },
  {
    id: "r16",
    name: "The Punjabi Rasoi",
    rating: 4.6,
    deliveryTime: "33 mins",
    cuisines: ["Punjabi", "North Indian"],
    image: "https://via.placeholder.com/300x200.png?text=Punjabi+Rasoi",
  },
  {
    id: "r17",
    name: "Curry Kingdom",
    rating: 4.3,
    deliveryTime: "29 mins",
    cuisines: ["Indian", "Curries"],
    image: "https://via.placeholder.com/300x200.png?text=Curry+Kingdom",
  },
  {
    id: "r18",
    name: "Pan-Asian Treats",
    rating: 4.1,
    deliveryTime: "26 mins",
    cuisines: ["Asian", "Chinese", "Thai"],
    image: "https://via.placeholder.com/300x200.png?text=Pan+Asian+Treats",
  },
  {
    id: "r19",
    name: "Cheesy Crust Cafe",
    rating: 4.0,
    deliveryTime: "24 mins",
    cuisines: ["Pizza", "Snacks"],
    image: "https://via.placeholder.com/300x200.png?text=Cheesy+Crust",
  },
  {
    id: "r20",
    name: "Momos Point",
    rating: 4.2,
    deliveryTime: "21 mins",
    cuisines: ["Chinese", "Street Food"],
    image: "https://via.placeholder.com/300x200.png?text=Momos+Point",
  },
];

// not using keys (not acceptable) <<< index as key <<<<< unique id(best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);