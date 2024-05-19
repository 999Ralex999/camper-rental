// src/pages/CatalogPage.js
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AdvertCard from "../components/AdvertCard";
import FilterSidebar from "../components/FilterSidebar";
import AdvertModal from "../components/AdvertModal";
import "../assets/styles/styles.css";

const CatalogPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });

  useEffect(() => {
    fetchAdverts(page);
  }, [page]);

  const fetchAdverts = (page) => {
    axios
      .get(
        `https://6647446e51e227f23ab1b9f9.mockapi.io/api/adverts?page=${page}&limit=4`
      )
      .then((response) => {
        const newAdverts = response.data;
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
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleShowMore = (advert) => {
    setSelectedAdvert(advert);
  };

  const handleCloseModal = () => {
    setSelectedAdvert(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = useCallback(
    (filters) => {
      let filtered = [...adverts];

      if (filters.location) {
        filtered = filtered.filter((advert) =>
          advert.location.includes(filters.location)
        );
      }

      if (filters.equipment.length > 0) {
        filtered = filtered.filter((advert) => {
          return filters.equipment.every((eq) => advert.details[eq]);
        });
      }

      if (filters.type) {
        filtered = filtered.filter((advert) => advert.form === filters.type);
      }

      setFilteredAdverts(filtered);
    },
    [adverts]
  );

  useEffect(() => {
    applyFilters(filters);
  }, [adverts, filters, applyFilters]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Catalog</h1>
      <div className="flex">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredAdverts.length > 0 ? (
            filteredAdverts.map((advert) => (
              <AdvertCard
                key={advert._id}
                advert={advert}
                onShowMore={handleShowMore}
              />
            ))
          ) : (
            <p>No adverts available.</p>
          )}
        </div>
      </div>
      {hasMore && (
        <button className="button mt-4" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {selectedAdvert && (
        <AdvertModal advert={selectedAdvert} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CatalogPage;
