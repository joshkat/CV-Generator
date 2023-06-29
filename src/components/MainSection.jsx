import GeneralInfo from "./inputs/GeneralInfo.jsx";
import Experience from "./inputs/Experience.jsx";
import Education from "./inputs/Education.jsx";

import GeneralInfoPreview from "./cv-view/GeneralInfoPreview.jsx";
import EducationPreview from "./cv-view/EducationPreview.jsx";
import ExperiencePreview from "./cv-view/ExperiencePreview.jsx";

import "../styles/MainSection.css";

import { useState } from "react";

export default function MainSection() {
  //general info state
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Your Name",
    lastName: "",
    address: "address",
    phoneNumber: "phone",
    email: "email",
    infoDescription: "",
  });

  //education state
  const [education, setEducation] = useState({
    schoolName: "",
    gpa: "",
    city: "",
    major: "",
    date: "",
  });

  //experience state
  const [expNumber, setExpNum] = useState(2);
  const [expArray, setExpArr] = useState([
    { number: 1, title: "", location: "", description: "", year: "" },
  ]);

  return (
    <>
      <div className="divider"></div>
      <form className="inputForm">
        <fieldset>
          <legend>General Information</legend>
          <GeneralInfo setGeneralInfo={setGeneralInfo} />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <Education setEducation={setEducation} />
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          <Experience
            expNumber={expNumber}
            setExpNum={setExpNum}
            expArray={expArray}
            setExpArr={setExpArr}
          />
        </fieldset>
      </form>
      <div className="divider"></div>
      <div className="cv-display">
        {/* The cv-views are added within their respective input components */}
        <GeneralInfoPreview generalInfoObj={generalInfo} />
        <div className="cv-main">
          <EducationPreview education={education} />
          <ExperiencePreview experienceArray={expArray} />
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
