import React from "react";

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navBarHeight = 120; // Adjust this value based on your actual navigation bar height
      const offset = section.offsetTop - navBarHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="h-screen w-ful cont" id="home">
      <div className="container mx-auto flex items-center flex-col justify-center text-center">
        <h1 className="font-extrabold text-5xl mb-3 font md:text-7xl animate-fade-in">
          Dev PAT
        </h1>
        <h2 className="font-semibold text-3xl color font text md:text-5xl animate-fade-in">
          I AM A FRONT END DEVELOPER
        </h2>
        <p className=" text-base mt-8 font text-slate-100 md:text-lg md:font-light animate-fade-in">
          I'm a freelance web developer creating stunning websites. Passionate
          about bringing ideas to life through clean, efficient, and
          user-friendly design.
        </p>
        <div className="flex space-x-3 items-center justify-center mt-6">
          <a
            href="#about"
            className="font-semibold text-1xl  border  p-2 rounded-full text-center w-[120px] md:w-[140px] animate-fade-in"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}>
            About Me
          </a>
          <a
            href="#project"
            className="font-semibold text-1xl  border  p-2 rounded-full text-center w-[120px] md:w-[140px] animate-fade-in"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#project");
            }}>
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
