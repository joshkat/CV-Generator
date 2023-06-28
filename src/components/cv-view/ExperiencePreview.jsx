import PropTypes from "prop-types";

export default function ExperiencePreview({ experienceArray }) {
  return (
    <>
      {experienceArray.map((exp_obj) => (
        <div key={exp_obj.number}>
          <h1>{exp_obj.title || `Job #${exp_obj.number}`}</h1>
          <span>{exp_obj.location || `Job #${exp_obj.number}`}</span>
          <p>{exp_obj.description || `A description...`}</p>
        </div>
      ))}
    </>
  );
}

ExperiencePreview.propTypes = {
  experienceArray: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
