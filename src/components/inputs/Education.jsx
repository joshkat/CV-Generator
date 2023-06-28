import educationTemplate from "../../json/Education.json";
import PropTypes from "prop-types";
import FormInput from "./FormInput.jsx";

export default function Education({ setEducation }) {
  function handleInputChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setEducation((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  }

  return (
    <>
      {educationTemplate.map((input) => (
        <FormInput
          key={input.id}
          title={input.title}
          type={input.type}
          id={input.id}
          placeholder={input.placeholder}
          handler={handleInputChange}
        />
      ))}
    </>
  );
}

Education.propTypes = {
  setEducation: PropTypes.func.isRequired,
};
