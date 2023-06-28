import PropTypes from "prop-types";
import "../../styles/GeneralInfoPreview.css";

export default function GeneralInfoPreview({ generalInfoObj }) {
  const name_string = `${generalInfoObj.firstName} ${generalInfoObj.lastName}`;
  return (
    <>
      <div className="header-wrapper">
        <h1 className="header-name">
          {name_string === " " ? "Your Name" : name_string}
        </h1>
        <div className="header-extras">
          <span>{generalInfoObj.phoneNumber}</span>|
          <span>{generalInfoObj.address}</span>|
          <span>{generalInfoObj.email}</span>
        </div>
      </div>
      <div className="header-about-wrapper">
        <h3 className="header-about-title">About Me</h3>
        <div>
          {generalInfoObj.infoDescription ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quo, voluptates odit possimus molestias numquam ab dignissimos rerum aliquam ducimus error et. Recusandae quas repellendus laboriosam molestiae magnam excepturi neque."}
        </div>
      </div>
    </>
  );
}

GeneralInfoPreview.propTypes = {
  generalInfoObj: PropTypes.object.isRequired,
};
