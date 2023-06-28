import PropTypes from "prop-types";

export default function ExperiencePreview({ experienceArray }) {
  return (
    <>
      {experienceArray.map((exp_obj) => (
        <h1 key={exp_obj.id}>{exp_obj.title || "No Title"}</h1>
      ))}
    </>
  );
}

ExperiencePreview.propTypes = {
  experienceArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
