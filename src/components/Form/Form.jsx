import css from "./Form.module.css";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

function Form() {
  return (
    <>
      <h3 className={css.heading}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <label className="visially-hidden" htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <label className="visially-hidden" htmlFor="email">
          Email
        </label>
        <input
          className={css.input}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <label className="visially-hidden" htmlFor="date">
          Date
        </label>
        <input
          className={css.input}
          id="date"
          type="date"
          name="date"
          placeholder="Booking date"
          required
        />
        <label className="visially-hidden" htmlFor="comment">
          Comment
        </label>
        <textarea
          className={css.textarea}
          placeholder="Comment"
          id="comment"
          name="comment"
        />
        <div>
          <ButtonPrimary buttonType="submit">Send</ButtonPrimary>
        </div>
      </form>
    </>
  );
}

export default Form;
