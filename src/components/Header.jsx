import React from "react";
import myImage from '../assets/me.jpeg';

const Header = () => {
    return (
        <div id="Header" className="flex flex-col lg:flex-row items-center justify-center h-screen lg:space-x-12 px-4 lg:px-20 mt-6 lg:mt-20">
            {/* Image on the left */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end mb-10 lg:mb-0">
                <img
                    src={myImage}
                    alt="Me"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg border-4 border-white"
                />
            </div>

            {/* Text on the right */}
            <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
                    Full-Stack
                    <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">{" "}Developer</span>
                </h1>
                <p className="text-lg sm:text-xl text-neutral-500 max-w-4xl leading-relaxed">
                    A recent graduate with a Bachelor's degree in Software Design with Artificial Intelligence for Cloud Computing from Technological University of the Shannon. 
                    With a solid foundation in full-stack development, including proficiency in object-oriented programming languages such as Java, Python, and PHP. 
                    Experienced with technologies such as Node.js, React.js, and MySQL. 
                    Hands-on experience spans both front-end and back-end development, relational databases, secure authentication, RESTful API creation, and Agile methodologies acquired during academic studies. 
                    Eager to continue learning and apply skills to develop effective software solutions in a dynamic environment.
                </p>
            </div>
        </div>
    );
};

export default Header;
