import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAdverts } from "../redux/reducers/advertsReducer";
import AdvertCard from "../components/AdvertCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.adverts);

  useEffect(() => {
    axios
      .get("https://6647446e51e227f23ab1b9f9.mockapi.io/api/adverts")
      .then((response) => {
        console.log("Adverts data:", response.data); // Логируем данные
        dispatch(setAdverts(response.data));
      })
      .catch((error) => {
        console.error("Error fetching adverts:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        {adverts.map((advert) => (
          <AdvertCard key={advert.id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { setAdverts } from "../redux/reducers/advertsReducer";
// import AdvertCard from "../components/AdvertCard";

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector((state) => state.adverts.adverts);

//   useEffect(() => {
//     axios
//       .get("https://6647446e51e227f23ab1b9f9.mockapi.io/api/adverts")
//       .then((response) => {
//         dispatch(setAdverts(response.data));
//       })
//       .catch((error) => {
//         console.error("Error fetching adverts:", error);
//       });
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Catalog</h1>
//       <div>
//         {adverts.map((advert) => (
//           <AdvertCard key={advert.id} advert={advert} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
