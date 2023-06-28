import PropTypes from "prop-types";

export default function ExperiencePreview({ experienceArray }) {
  return (
    <>
      <div>{experienceArray.toString()}</div>
    </>
  );
}

ExperiencePreview.propTypes = {
  experienceArray: PropTypes.array.isRequired,
};
