import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectGallery from "./components/Gallery/ProjectGallery";
import AssignmentsPortfolio from "./components/Assignments/AssignmentsPortfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Toaster } from "sonner";
import AssignmentGallery from "./components/Gallery/AssignmentGallery";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <ProjectGallery /> */}
        <AssignmentGallery />
        <AssignmentsPortfolio />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Eugene Amoo-Sargon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
