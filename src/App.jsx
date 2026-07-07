import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Page = ({ title }) => (
  <div className="h-screen flex justify-center items-center text-5xl font-bold">
    {title}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Page title="Projects" />} />
        <Route path="/blog" element={<Page title="Blog" />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;