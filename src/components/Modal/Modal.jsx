/* src/components/Modal/Modal.jsx*/
import { useEffect } from "react";
import css from "./Modal.module.css";
import CardTitle from "../Card/CardTitle/CardTitle";
import CardReviews from "../Card/CardReviews/CardReviews";
import CardLocation from "../Card/CardLocation/CardLocation";
import CardPrice from "../Card/CardPrice/CardPrice";
import CardDescription from "../Card/CardDescription/CardDescription";
import ModalNavigation from "./ModalNavigation/ModalNavigation";
import Form from "../Form/Form";
import ButtonClose from "../Buttons/ButtonClose/ButtonClose";
import ModalImagesList from "./ModalImagesList/ModalImagesList";
import ModalFeatures from "./ModalFeatures/ModalFeatures";
import ReviewsList from "../Reviews/ReviewsList";
import { useDispatch, useSelector } from "react-redux";
import { selectModalData, selectReviewsState } from "../../redux/selectors";
import { toggleIsOpen } from "../../redux/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const camperData = useSelector(selectModalData);

  const isReviewsActive = useSelector(selectReviewsState);

  const handleClickOnOverlay = (event) => {
    if (event.target.classList.contains("background")) {
      dispatch(toggleIsOpen());
      return;
    }
  };

  const handleClose = () => {
    dispatch(toggleIsOpen());
  };

  useEffect(() => {
    const handleEscape = ({ code }) => {
      if (code === "Escape") {
        dispatch(toggleIsOpen());
        return;
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);

  return (
    <div onClick={handleClickOnOverlay} className={`background ${css.overlay}`}>
      <div className={css.modal}>
        <div className={css.header}>
          <CardTitle>{camperData.name}</CardTitle>
          <ButtonClose clickCallback={handleClose} />
        </div>
        <div className={css.reviews}>
          <CardReviews
            rating={camperData.rating}
            reviewsNumber={camperData.reviews.length}
          />
          <CardLocation location={camperData.location} />
        </div>
        <CardPrice>{camperData.price}</CardPrice>
        <ModalImagesList images={camperData.gallery} />
        <CardDescription
          description={camperData.description}
          truncate={false}
        />
        <div className={css.navigation}>
          <ModalNavigation />
          <div className={css.footer}>
            <div>
              {isReviewsActive ? (
                <ReviewsList reviews={camperData.reviews} />
              ) : (
                <ModalFeatures
                  adults={camperData.adults}
                  transmission={camperData.transmission}
                  engine={camperData.engine}
                  details={camperData.details}
                />
              )}
            </div>
            <div className={css.form}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
