/* src/components/Icons/Icons.jsx*/
import icons from "../../assets/icons/icons.svg";

function Icon({ iconName }) {
  return (
    <svg>
      <use href={`${icons}#icon-${iconName}`} />
    </svg>
  );
}

export default Icon;
