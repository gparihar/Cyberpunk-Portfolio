import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Terminal from "./components/Terminal";
import Matrix from "./components/Matrix";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import PageFade from "./components/PageFade";



function App() {
  const [ready, setReady] = useState(false);
  const location = useLocation();

  if (!ready) return <Terminal onFinish={() => setReady(true)} />;

  return (

      <>
     <Matrix />
      <Cursor />
      <PageFade />
  
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;