import GeneralInfo from "./components/inputs/GeneralInfo.jsx";
import Experience from "./components/inputs/Experience.jsx";
import Education from "./components/inputs/Education.jsx";

import GeneralInfoPreview from "./components/cv-view/GeneralInfoPreview.jsx";
import EducationPreview from "./components/cv-view/EducationPreview.jsx";
import ExperiencePreview from "./components/cv-view/ExperiencePreview.jsx";

import { useState } from "react";

function App() {
  //general info state
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Your Name",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
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
    { number: 1, title: "", location: "", description: "" },
  ]);
  return (
    <>
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
      <div className="cv-display">
        {/* The cv-views are added within their respective input components */}
        <GeneralInfoPreview generalInfoObj={generalInfo} />
        <EducationPreview education={education} />
        <ExperiencePreview experienceArray={expArray} />
      </div>
    </>
  );
}

export default App;
