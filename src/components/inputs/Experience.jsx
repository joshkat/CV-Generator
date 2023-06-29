import PropTypes from "prop-types";
import FormInput from "./FormInput.jsx";

export default function Experience({
  expNumber,
  setExpNum,
  expArray,
  setExpArr,
}) {
  //helper functions
  function handleExperienceInputChange(e) {
    //update the obj of the corresponding key, index is last char of string key is string - last char
    const index = parseInt(e.target.id.slice(-1)) - 1;
    const key = e.target.id.slice(0, e.target.id.length - 1);

    const tempArr = [...expArray];
    const updatedObj = { ...tempArr[index] };
    updatedObj[key] = e.target.value;
    tempArr[index] = updatedObj;

    setExpArr(tempArr);
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

  return (
    <>
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

            <FormInput
              key={"year" + experience_object.number.toString()}
              title={"Year"}
              type="text"
              id={"year" + experience_object.number.toString()}
              placeholder={"2000 - Present"}
              handler={handleExperienceInputChange}
            />

            <p className="input-title">Description</p>
            <textarea
              key={"description" + experience_object.number.toString()}
              name="Description"
              id={"description" + experience_object.number.toString()}
              placeholder="This will render out as a list so don't forget to use line breaks :)"
              rows="3"
              onChange={handleExperienceInputChange}
            ></textarea>
          </>
        ))}
      </div>
      <button onClick={addExperience} className="add-btn">
        Add Experience
      </button>
      <br />
      <button onClick={removeExperience} className="remove-btn">
        Remove Experience
      </button>
    </>
  );
}

Experience.propTypes = {
  expNumber: PropTypes.number.isRequired,
  setExpNum: PropTypes.func.isRequired,
  expArray: PropTypes.array.isRequired,
  setExpArr: PropTypes.func.isRequired,
};
