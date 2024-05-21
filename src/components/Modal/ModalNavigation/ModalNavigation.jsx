/* src/components/Modal/ModalNavigation/ModalNavigation.jsx*/
import { useDispatch, useSelector } from "react-redux";
import css from "./ModalNavigation.module.css";
import { setReviewsView } from "../../../redux/modalSlice";
import { selectReviewsState } from "../../../redux/selectors";

function ModalNavigation() {
  const dispatch = useDispatch();

  const isReviewsActive = useSelector(selectReviewsState);

  const handleClick = (action) => {
    dispatch(setReviewsView(action));
  };

  return (
    <div>
      <div className={css.container}>
        <button
          onClick={() => handleClick(false)}
          className={
            isReviewsActive ? `${css.button}` : `${css.pressed} ${css.button}`
          }
          type="button"
        >
          Features
        </button>
        <button
          onClick={() => handleClick(true)}
          className={
            isReviewsActive ? `${css.pressed} ${css.button}` : `${css.button}`
          }
          type="button"
        >
          Reviews
        </button>
      </div>
      <hr className={css.divider} />
    </div>
  );
}

export default ModalNavigation;
