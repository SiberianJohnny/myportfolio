import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function App() {
  const inViewOptions = {
    threshold: 0.5,
  };

  const { ref: headerRef, inView: headerInView } = useInView(inViewOptions);
  const { ref: aboutRef, inView: aboutInView } = useInView(inViewOptions);
  const { ref: portfolioRef, inView: portfolioInView } =
    useInView(inViewOptions);

  const [activeElement, setActiveElement] = useState("#");

  useEffect(() => {
    if (headerInView) {
      setActiveElement("#home");
    }
    if (aboutInView) {
      setActiveElement("#about");
    }
    if (portfolioInView) {
      setActiveElement("#portfolio");
    }
  }, [headerInView, aboutInView, portfolioInView]);

  return (
    <div className="App">
      <Header innerRef={headerRef} />
      <Navbar activeElement={activeElement} />
      <About innerRef={aboutRef} />
      <Portfolio innerRef={portfolioRef} />
      <Footer />
    </div>
  );
}

export default App;
