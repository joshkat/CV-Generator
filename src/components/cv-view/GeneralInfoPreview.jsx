import PropTypes from "prop-types";

export default function GeneralInfoPreview({ generalInfoObj }) {
  return (
    <>
      <h1>
        {`${generalInfoObj.firstName} ${generalInfoObj.lastName}` ||
          `Your Name`}
      </h1>
      <span>{generalInfoObj.address}</span>
      <span>{generalInfoObj.phoneNumber}</span>
      <span>{generalInfoObj.email}</span>

      <div>{generalInfoObj.infoDescription}</div>
    </>
  );
}

GeneralInfoPreview.propTypes = {
  generalInfoObj: PropTypes.object.isRequired,
};
