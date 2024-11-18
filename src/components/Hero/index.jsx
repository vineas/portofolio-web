import Image from "next/image";
import ava from "../../assets/img/ava.jpeg";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const myName = "I'm Alvienas";
  const titles = [
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "Designer",
    "Video Editor",
    "React JS",
    "Next JS",
    "Express JS",
    "React Native",
  ];

  return (
    <div className="bg-gray-900">
      <div className="  mx-auto container text-center md:text-left text-white h-screen items-center grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto  ">
          <h3 className="text-5xl text-center md:text-left font-bold mb-4">
            Hi, {myName}
          </h3>
          <h3 className="text-3xl text-center md:text-left font-bold text-teal-500">
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </h3>
        </div>

        <div className="">
          <Image
            src={ava}
            alt="alvienas"
            className="w-2/3 mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
