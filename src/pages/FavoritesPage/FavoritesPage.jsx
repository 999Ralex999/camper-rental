// src/pages/FavoritesPage/FavoritesPage.jsx
import { useSelector } from "react-redux";
import SectionTitle from "../../components/Typography/SectionTitle/SectionTitle";
import { selectFavoriteCampers, selectOpenModal } from "../../redux/selectors";
import CatalogList from "../../components/CatalogList/CatalogList";
import Modal from "../../components/Modal/Modal";
import css from "./FavoritesPage.module.css";

function FavoritesPage() {
  const favoritesCampers = useSelector(selectFavoriteCampers);

  const isModalOpen = useSelector(selectOpenModal);

  return (
    <section>
      <SectionTitle>Your favorite campers</SectionTitle>
      {favoritesCampers.length > 0 ? (
        <CatalogList campers={favoritesCampers} />
      ) : (
        <p className={css.placeholder}>You don't have favorite campers yet</p>
      )}
      {isModalOpen && <Modal />}
    </section>
  );
}

export default FavoritesPage;
