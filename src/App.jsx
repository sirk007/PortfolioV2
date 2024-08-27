import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import DownloadCV from './components/DownloadCV';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Header />
        <Skills />
        <ProjectsSection />
        <DownloadCV />
        <Footer />
      </div>
    </>
  )
}
export default App