import "./App.css";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import MyInfo from "./Components/MyInfo";
import NavBar from "./Components/NavBar";
import Name from "./Components/Name";

function App() {
  return (
    <section id="top">
      <div className="App">
        <NavBar />
        <Name />
        <AboutMe />
        <Projects />
        <MyInfo />
      </div>
    </section>
  );
}

export default App;
