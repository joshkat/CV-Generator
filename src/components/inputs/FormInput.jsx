import PropTypes from "prop-types";
import "../../styles/FormInput.css";

export default function FormInput({ type, title, id, placeholder, handler }) {
  return (
    <>
      <p className="input-title">{title}</p>
      <input
        type={type}
        id={id}
        className=""
        placeholder={placeholder === undefined ? "" : placeholder}
        onInput={handler}
      />
    </>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func,
  placeholder: PropTypes.string,
};
