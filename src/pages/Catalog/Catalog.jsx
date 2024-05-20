// src/pages/Catalog/Catalog.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { selectFilteredCampers } from "../../redux/selectors";
import "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>{camper.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
