// src/pages/CatalogPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvertCard from "../components/AdvertCard";
import "../assets/styles/styles.css";

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
        setAdverts((prevAdverts) => [...prevAdverts, ...response.data]);
        if (response.data.length < 4) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching adverts:", error);
      });
  }, [page]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adverts.length > 0 ? (
          adverts.map((advert) => (
            <AdvertCard
              key={advert.id}
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
          className="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
