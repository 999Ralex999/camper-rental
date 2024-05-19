// src/pages/CatalogPage/CatalogPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import styles from "./CatalogPage.module.css";

const CatalogPage = ({ onShowMore }) => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://6647446e51e227f23ab1b9f9.mockapi.io/api/adverts?page=${page}&limit=4`
      )
      .then((response) => {
        const newAdverts = response.data;
        console.log("Fetched adverts:", newAdverts);
        newAdverts.forEach((advert) => {
          console.log("Advert details:", advert);
        });
        setAdverts((prevAdverts) => [...prevAdverts, ...newAdverts]);
        if (newAdverts.length < 4) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching adverts:", error);
      });
  }, [page]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catalog</h1>
      <div className={styles.grid}>
        {adverts.length > 0 ? (
          adverts.map((advert) => (
            <AdvertCard
              key={advert._id}
              advert={advert}
              onShowMore={onShowMore}
            />
          ))
        ) : (
          <p>No adverts available.</p>
        )}
      </div>
      {hasMore && (
        <button
          className={styles.button}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
