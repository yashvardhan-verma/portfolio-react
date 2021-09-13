import './App.css';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return [
      <Navbar />,
      <Intro />,
      <Skills />,
      <Footer />
  ];
}

export default App;
