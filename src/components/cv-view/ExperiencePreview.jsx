import PropTypes from "prop-types";
import "../../styles/Experience.css";

export default function ExperiencePreview({ experienceArray }) {
  return (
    <>
      <h3 className="experience-title">Experience</h3>
      <div className="title-underline"></div>
      {experienceArray.map((exp_obj) => (
        <>
          <div key={exp_obj.number} className="exp-line-wrapper">
            <div className="exp-top-line">
              <h4 className="job-title">
                {exp_obj.title || `Experience #${exp_obj.number}`}
              </h4>
              <span>{exp_obj.year || `Year #${exp_obj.number}`}</span>
            </div>
            <div className="exp-bottom-line">
              <span>{exp_obj.location || `Location #${exp_obj.number}`}</span>
            </div>
          </div>
          <ul>
            {exp_obj.description.split("\n").map((line) => (
              <>
                <li>{line}</li>
              </>
            ))}
          </ul>
        </>
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
