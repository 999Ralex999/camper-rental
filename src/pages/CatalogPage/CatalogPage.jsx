// src/pages/CatalogPage/CatalogPage.jsx
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
  const allCampers = useSelector(selectVisibleCampers);
  const isModalOpen = useSelector(selectOpenModal);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const visibleCampers = allCampers.slice(0, page * 4);

  return (
    <section className={css.container}>
      <Filters />
      <div>
        {!isLoading && !error ? (
          <CatalogList campers={visibleCampers} />
        ) : (
          <Loader />
        )}
        {isModalOpen && <Modal />}
        {!isLoading && !error && page * 4 < allCampers.length && (
          <SecondaryButton clickCallback={loadMore}>Load more</SecondaryButton>
        )}
      </div>
    </section>
  );
}

export default CatalogPage;
