/* src/components/Modal/ModalImagesList/ModalImagesItem/ModalImagesItem.jsx*/
import CardImage from "../../../Card/CardImage/CardImage";
import css from "./ModalImagesItem.module.css";

function ModalImagesItem({ imageData }) {
  return (
    <>
      <li className={css.item}>
        <CardImage image={imageData} />
      </li>
    </>
  );
}

export default ModalImagesItem;
