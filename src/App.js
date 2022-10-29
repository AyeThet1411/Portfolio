import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Testimonial from "./pages/Testimonial";
import Experience from "./pages/Experience";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
