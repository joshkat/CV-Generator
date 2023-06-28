import general_info from "../../json/GeneralInfo.json";
import FormInput from "./FormInput.jsx";
import PropTypes from "prop-types";

export default function GeneralInfo({ setGeneralInfo }) {
  function handleInputChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  }
  return (
    <>
      <div>
        {general_info.map((input) => (
          <FormInput
            key={input.id}
            title={input.title}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            handler={handleInputChange}
          />
        ))}
        <p className="input-title">Description</p>
        <textarea
          name="Description"
          id="infoDescription"
          placeholder="..."
          rows="10"
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
}

GeneralInfo.propTypes = {
  setGeneralInfo: PropTypes.func.isRequired,
};
