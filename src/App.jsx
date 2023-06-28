import GeneralInfo from "./components/inputs/GeneralInfo.jsx";
import Experience from "./components/inputs/Experience.jsx";
import Education from "./components/inputs/Education.jsx";

import ExperiencePreview from "./components/cv-view/ExperiencePreview.jsx";

import { useState } from "react";

function App() {
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
          <GeneralInfo />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <Education />
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
        <div className="general-info">general info</div>
        <div className="education">education</div>
        <ExperiencePreview experienceArray={expArray} />
      </div>
    </>
  );
}

export default App;
