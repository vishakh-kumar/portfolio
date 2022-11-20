import "./App.scss";
import Footer from "./app/components/Footer";
import Navbar from "./app/components/header/Navbar";
import Main from "./app/pages/Main";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
