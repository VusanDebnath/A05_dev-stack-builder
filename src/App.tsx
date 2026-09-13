import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";

import { useStack } from "./hooks/useStack";
import type { Technology } from "./types/technology";
import technologiesData from "./data/technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { stack, isInStack, addToStack, removeFromStack, removeAll } =
    useStack();

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div id="top">
      <Navbar />
      <Hero />
      <TechnologiesSection
        technologies={technologies}
        isLoading={isLoading}
        stack={stack}
        isInStack={isInStack}
        onAdd={addToStack}
        onRemove={removeFromStack}
        onRemoveAll={removeAll}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  );
}
