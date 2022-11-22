import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay";



import './App.css';

function App() {
  return (
    <div className="App">
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
