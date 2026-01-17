import React from "react";
import Navbar from "./Components/Navigation";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
