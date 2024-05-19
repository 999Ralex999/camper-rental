// src/pages/CatalogPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvertCard from "../components/AdvertCard";
import "../assets/styles/styles.css";

const CatalogPage = ({ onShowMore, onToggleFavorite }) => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });

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

        setAdverts((prevAdverts) => {
          const updatedAdverts = [...prevAdverts];
          newAdverts.forEach((newAdvert) => {
            if (!updatedAdverts.some((ad) => ad._id === newAdvert._id)) {
              updatedAdverts.push(newAdvert);
            }
          });
          return updatedAdverts;
        });

        if (newAdverts.length < 4) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching adverts:", error);
      });
  }, [page]);

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      if (name === "location") {
        return { ...prevFilters, location: value };
      } else if (name === "type") {
        return { ...prevFilters, type: value };
      } else {
        if (checked) {
          return {
            ...prevFilters,
            equipment: [...prevFilters.equipment, value],
          };
        } else {
          return {
            ...prevFilters,
            equipment: prevFilters.equipment.filter((e) => e !== value),
          };
        }
      }
    });
  };

  const applyFilters = () => {
    console.log(filters);
    // Логика для фильтрации объявлений на основе состояния filters
  };

  return (
    <div className="container">
      <h1 className="title">Catalog</h1>
      <div className="filters">
        <div className="filter-group">
          <label className="filter-label">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <h3 className="filter-label">Vehicle equipment</h3>
          <div>
            {["AC", "Automatic", "Kitchen", "TV", "Shower/WC"].map(
              (equipment) => (
                <label key={equipment} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="equipment"
                    value={equipment}
                    onChange={handleFilterChange}
                    className="checkbox-input"
                  />
                  {equipment}
                </label>
              )
            )}
          </div>
        </div>
        <div className="filter-group">
          <h3 className="filter-label">Vehicle type</h3>
          {["Van", "Fully Integrated", "Alcove"].map((type) => (
            <label key={type} className="radio-label">
              <input
                type="radio"
                name="type"
                value={type}
                onChange={handleFilterChange}
                className="radio-input"
              />
              {type}
            </label>
          ))}
        </div>
        <button onClick={applyFilters} className="search-button">
          Search
        </button>
      </div>
      <div className="adverts-grid">
        {adverts.length > 0 ? (
          adverts.map((advert) => {
            console.log("Rendering advert with id:", advert._id);
            return (
              <AdvertCard
                key={advert._id}
                advert={advert}
                onShowMore={onShowMore}
                onToggleFavorite={onToggleFavorite}
              />
            );
          })
        ) : (
          <p>No adverts available.</p>
        )}
      </div>
      {hasMore && (
        <button
          className="load-more-button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
