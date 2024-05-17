import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/reducers/advertsReducer";

const AdvertCard = ({ advert }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{advert.name}</h2>
      <p>{advert.description}</p>
      <button onClick={() => dispatch(toggleFavorite(advert.id))}>
        {advert.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default AdvertCard;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { toggleFavorite } from "../redux/reducers/advertsReducer";

// const AdvertCard = ({ advert }) => {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>{advert.name}</h2>
//       <p>{advert.description}</p>
//       <button onClick={() => dispatch(toggleFavorite(advert.id))}>
//         {advert.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//       </button>
//     </div>
//   );
// };

// export default AdvertCard;
