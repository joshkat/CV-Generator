import PropTypes from "prop-types";

export default function EducationPreview({ education }) {
  return (
    <>
      <span>{education.schoolName}</span>
      <span>{education.city}</span>
      <span>{education.major}</span>

      <div>{education.date}</div>
    </>
  );
}

EducationPreview.propTypes = {
  education: PropTypes.object.isRequired,
};
