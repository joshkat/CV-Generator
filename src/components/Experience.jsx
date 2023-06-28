import PropTypes from "prop-types";
import { useState } from "react";
import FormInput from "./FormInput.jsx";

export default function Experience() {
  const [expNumber, setExpNum] = useState(2);
  const [expArray, setExpArr] = useState([{ number: 1 }]);

  //helper functions
  function handleExperienceInputChange(e) {
    e.preventDefault();
    document.querySelector("." + e.target.id).innerText = e.target.value;
    console.log(e.target.id, e.target);
  }
  function addExperience(e) {
    e.preventDefault();
    setExpNum(expNumber + 1);
    setExpArr([...expArray, { number: expNumber }]);
  }

  function removeExperience(e) {
    e.preventDefault();
    if (expArray.length === 1) {
      console.log("ran");
      return;
    } else {
      setExpNum(expNumber - 1);
      setExpArr(expArray.slice(0, expArray.length - 1));
    }
  }

  function renderExperienceView() {
    //takes the expArr and loads it into the right side of the dom to display it to the user
  }

  return (
    <>
      {console.log(expArray)}
      <button onClick={addExperience}>Add Experience #{expNumber}</button>
      <br />
      <button onClick={removeExperience}>Remove Experience</button>
      <div>
        {expArray.map((experience_object) => (
          <>
            <FormInput
              title={"Job Title"}
              type="text"
              id={"title" + experience_object.number.toString()}
              placeholder={"Software Developer"}
              handler={handleExperienceInputChange}
            />

            <FormInput
              title={"Location"}
              type="text"
              id={"location" + experience_object.number.toString()}
              placeholder={"Earth"}
              handler={handleExperienceInputChange}
            />

            <p className="input-title">Description</p>
            <textarea
              name="Description"
              id={"description" + experience_object.number.toString()}
              placeholder="- Be sure to use bullet points&#10;- For the best effect&#10;- 2 to 3 is ideal :)"
              rows="3"
              onChange={handleExperienceInputChange}
            ></textarea>
          </>
        ))}
      </div>
    </>
  );
}

Experience.propTypes = {
  expNumber: PropTypes.number.isRequired,
  expArray: PropTypes.array.isRequired,
  addExperience: PropTypes.func.isRequired,
  removeExperience: PropTypes.func.isRequired,
};
