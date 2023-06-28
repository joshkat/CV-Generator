import education from "../../json/Education.json";
import FormInput from "./FormInput.jsx";

export default function Education() {
  return (
    <>
      {education.map((input) => (
        <FormInput
          key={input.id}
          title={input.title}
          type={input.type}
          id={input.id}
          placeholder={input.placeholder}
          // handler={handleInputChange}
        />
      ))}
    </>
  );
}
