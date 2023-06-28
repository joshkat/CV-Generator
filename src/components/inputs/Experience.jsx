import { useState } from "react";
import FormInput from "./FormInput.jsx";

export default function Experience() {
  const [expNumber, setExpNum] = useState(2);
  const [expArray, setExpArr] = useState([
    { number: 1, title: "", location: "", description: "" },
  ]);

  //helper functions
  function handleExperienceInputChange(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      return;
    }

    //update the obj of the corresponding key, index is last char of string key is string - last char
    const index = parseInt(e.target.id.slice(-1)) - 1;
    const key = e.target.id.slice(0, e.target.id.length - 1);

    let tempArr = expArray;
    tempArr[index][key] = e.target.value;

    setExpArr(tempArr);
    console.log(tempArr);
  }
  function addExperience(e) {
    e.preventDefault();
    setExpNum(expNumber + 1);
    setExpArr([
      ...expArray,
      { number: expNumber, title: "", location: "", description: "" },
    ]);
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

  // function renderExperienceView() {
  //   //takes the expArr and loads it into the right side of the dom to display it to the user
  // }

  return (
    <>
      <button onClick={addExperience}>Add Experience #{expNumber}</button>
      <br />
      <button onClick={removeExperience}>Remove Experience</button>
      <div>
        {expArray.map((experience_object) => (
          <>
            <FormInput
              key={"title" + experience_object.number.toString()}
              title={"Job Title"}
              type="text"
              id={"title" + experience_object.number.toString()}
              placeholder={"Software Developer"}
              handler={handleExperienceInputChange}
            />

            <FormInput
              key={"location" + experience_object.number.toString()}
              title={"Location"}
              type="text"
              id={"location" + experience_object.number.toString()}
              placeholder={"Earth"}
              handler={handleExperienceInputChange}
            />

            <p className="input-title">Description</p>
            <textarea
              key={"description" + experience_object.number.toString()}
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
