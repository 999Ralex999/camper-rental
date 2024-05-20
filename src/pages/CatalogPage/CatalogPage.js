// src/pages/CatalogPage/CatalogPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { selectFilteredCampers } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Catalog</h1>
      <div className={styles.grid}>
        {campers.map((camper) => (
          <AdvertCard key={camper.id} advert={camper} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
