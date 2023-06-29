import PropTypes from "prop-types";
import "../../styles/Education.css";

export default function EducationPreview({ education }) {
  return (
    <>
      <h3 className="education-title">Education</h3>
      <div className="title-underline"></div>
      <div className="education-topline">
        <div>
          <span>{education.schoolName || "School Name"}&ensp;</span>
          <span className="gpa">GPA {education.gpa}&ensp;</span>
        </div>
        <span>{education.city || "City"}&ensp;</span>
      </div>

      <em className="education-bottomline">
        <span>{education.major || "Major"}&ensp;</span>
        <span>{education.date || "date"}&ensp;</span>
      </em>
    </>
  );
}

EducationPreview.propTypes = {
  education: PropTypes.object.isRequired,
};
