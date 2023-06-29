import MainSection from "./components/MainSection.jsx";

function App() {
  return (
    <>
      <header>
        CV Generator{" "}
        <input
          type="color"
          className="color-pick"
          onChange={(e) =>
            (document.querySelector(".header-wrapper").style.backgroundColor =
              e.target.value)
          }
          defaultValue={"#add8e6"}
        />
      </header>
      <div className="main-wrapper">
        <MainSection></MainSection>
      </div>
    </>
  );
}

export default App;
