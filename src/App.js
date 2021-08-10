import "./App.scss";
import Navbar from "./app/components/header/Navbar";
import Intro from "./app/components/main/Intro";
import Projects from "./app/components/main/Projects";
import Specs from "./app/components/main/Specs";
function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Specs />
            <Projects />
        </div>
    );
}

export default App;

// primary color #6A73C7
