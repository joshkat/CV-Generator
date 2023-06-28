import GeneralInfo from "./components/GeneralInfo.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

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
      </div>
    </>
  );
}

export default App;
