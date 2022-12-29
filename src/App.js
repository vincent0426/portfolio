import "./index.css";
import Hero from "./components/Hero";
import WorkingExperience from "./components/WorkingExperience";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="bg-gray-50">
            <Hero />
            <WorkingExperience />
            <Projects />
        </div>
    );
}

export default App;
