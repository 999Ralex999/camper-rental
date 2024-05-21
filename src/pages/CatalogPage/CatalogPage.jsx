// src/pages/Catalog/Catalog.jsx
import React, { useEffect, useState } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectOpenModal,
} from "../../redux/selectors";
import { fetchCampers } from "../../redux/operations";
import { selectVisibleCampers } from "../../redux/selectors";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

function CatalogPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredCampers = useSelector(selectVisibleCampers);
  const isModalOpen = useSelector(selectOpenModal);
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(1));
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchCampers(page));
    setPage(page + 1);
  };

  return (
    <section className={css.container}>
      <Filters />
      <div>
        {!isLoading && !error ? (
          <CatalogList campers={filteredCampers} />
        ) : (
          <Loader />
        )}
        {isModalOpen && <Modal />}
        {!isLoading && !error && (
          <SecondaryButton clickCallback={loadMore}>Load more</SecondaryButton>
        )}
      </div>
    </section>
  );
}

export default CatalogPage;
