import GeneralInfo from "./components/inputs/GeneralInfo.jsx";
import Experience from "./components/inputs/Experience.jsx";
import Education from "./components/inputs/Education.jsx";

function App() {
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
          <Experience />
        </fieldset>
      </form>
      <div className="cv-display">
        left side will be input, right side will display a prettier version of
        inputs
        <div className="title1"></div>
        <div className="title2"></div>
      </div>
    </>
  );
}

export default App;
