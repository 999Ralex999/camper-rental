import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdverts } from "../redux/reducers/advertsReducer";
import axios from "axios";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.adverts);

  useEffect(() => {
    axios
      .get("https://your-mockapi-url/adverts")
      .then((response) => {
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
        {adverts.map((ad) => (
          <div key={ad.id}>
            <h2>{ad.name}</h2>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
