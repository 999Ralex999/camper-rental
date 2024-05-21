import { Link } from "react-router-dom";
import css from "./PrimaryLink.module.css";

function PrimaryLink({ text }) {
	return (
		<Link
			to="./catalog"
			className={css.link}>
			{text}
		</Link>
	);
}

export default PrimaryLink;
