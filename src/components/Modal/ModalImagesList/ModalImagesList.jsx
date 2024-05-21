/* src/components/Modal/ModalImagesList/ModalImagesList.jsx*/
import css from "./ModalImagesList.module.css";
import ModalImagesItem from "./ModalImagesItem/ModalImagesItem";
import { nanoid } from "@reduxjs/toolkit";

function ModalImagesList({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ModalImagesItem key={nanoid()} imageData={image} />
      ))}
    </ul>
  );
}

export default ModalImagesList;
