// components/Skills.jsx
import React from "react";
import { skills, miscellaneous } from "../constants";

const Skills = () => {
  return (
    <div id="Skills" className="flex flex-col items-center mt-6 lg:mt-20">

      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Abilities
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Technical <span className="bg-gradient-to-r from-yellow-500 to-red-800 text-transparent bg-clip-text">{" "}Skills</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-yellow-700 justify-center items-center rounded-full">
                {skill.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{skill.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Miscellaneous <span className="bg-gradient-to-r from-yellow-500 to-red-800 text-transparent bg-clip-text"> Skills</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {miscellaneous.map((item, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-yellow-700 justify-center items-center rounded-full">
                {item.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
