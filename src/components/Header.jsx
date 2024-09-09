import React from "react";

const Header = () =>{
    return <div id="Header" className="flex flex-col items-center h-screen mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Full-Stack 
            <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text"> {" "}Developer</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        A recent graduate with a Bachelor's degree in Software Design with Artificial Intelligence for Cloud Computing from Technological University of the Shannon. 
        With a solid foundation in full-stack development, including proficiency in object-oriented programming languages such as 
        Java, Python, and PHP. Experienced with technologies such as Node.js, React.js, and MySQL. 
        Hands-on experience spans both front-end and back-end development, relational databases, secure authentication, RESTful API creation, 
        and Agile methodologies acquired during academic studies. Eager to continue learning and apply skills to develop effective software solutions in a dynamic environment.
        </p>
        
    </div>
};

export default Header;