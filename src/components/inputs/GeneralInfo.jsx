import general_info from "../../json/GeneralInfo.json";
import FormInput from "./FormInput.jsx";

export default function GeneralInfo() {
  function handleInputChange(e) {
    if (e.key === "Enter") e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <>
      <div>
        {general_info.map((input) => (
          <FormInput
            key={input.id}
            title={input.title}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            handler={handleInputChange}
          />
        ))}
        <p className="input-title">Description</p>
        <textarea
          name="Description"
          id="description"
          placeholder="..."
          rows="10"
        ></textarea>
      </div>
    </>
  );
}
