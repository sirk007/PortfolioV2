import React from 'react';
import cvPdf from '../assets/kristijonasChmieliauskas-CV.pdf';

const DownloadCV = () => {
  const downloadCV = () => {
    const filename = 'kristijonasChmieliauskas-CV.pdf';
    const link = document.createElement('a');
    link.href = cvPdf;
    link.setAttribute('download', filename);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div id="DownloadCV" className="flex flex-col items-center py-12 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <p className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Software Developer</p>
        <h3 className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">Download my CV to learn more about my skills and experience.</h3>
      </div>
      <div className="mt-6">
        <button
          type="button"
          onClick={downloadCV}
          className="bg-gradient-to-r from-red-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Download CV</button>
      </div>
    </div>
  );
};

export default DownloadCV;
