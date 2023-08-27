import React from "react";
import Image from "../assets/patrick.jpg";
const About = () => {
  return (
    <div className="w-full" id="about">
      <div>
        {" "}
        <div className="container mx-auto">
          <h1 className="font-bold text-3xl text-center mt-6 color">
            About Me
          </h1>
          <div className="flex items-center xl:justify-center flex-col mt-10 md:flex-col lg:flex-row">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={Image}
                className="rad object-cover md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]"></img>
            </div>
            <div className="flex-1 text-sm w-[80%] mx-auto text-justify mt-6 text-gray-700 font md:text-2xl flex  justify-center flex-col">
              <p className="md:leading-10 md:font-light">
                <span className="font color font-semibold">
                  Patrick Bongalos
                </span>
                , a dedicated and passionate front-end web developer. With a
                keen eye for design and a love for crafting seamless user
                experiences, I've embarked on an exciting journey in the world
                of web development. Guided by the ever-evolving landscape of
                technology and design trends, I find myself in constant pursuit
                of innovative ways to bring digital visions to life.
              </p>
              <div className="mt-4">
                <h2 className="font-semibold text-1xl color">Skills</h2>
                <div className="flex flex-wrap">
                  <p className="borderr px-4 ">Html</p>
                  <p className="borderr px-4 ">CSS</p>
                  <p className="borderr px-4 ">Javascript</p>
                  <p className="borderr px-4 ">ReactJs</p>
                  <p className="borderr px-4 ">Tailwind</p>
                  <p className="borderr px-4 ">Bootstrap</p>
                  <p className="borderr px-4 ">Php</p>
                  <p className="borderr px-4 ">Mysql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
