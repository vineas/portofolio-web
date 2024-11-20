import Image from "next/image";
import ava from "../../assets/img/ava.jpeg";
import React from "react";
import Typewriter from "typewriter-effect";
import { VT323 } from "next/font/google";
import { Inter } from "next/font/google";
const vT = VT323({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  const iAm = "I'm";
  const myName = "Alvienas;";
  const way = ">";
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
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Capcut",
  ];

  return (
    <div className="bg-gray-900">
      <div className="mx-auto container text-center min-h-screen md:h-screen items-center md:text-left text-white grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:p-0 md:order-2">
          <Image
            src={ava}
            alt="alvienas"
            className="md:w-2/3 md:mx-auto rounded-full"
          />
        </div>

        <div className="mx-auto md:order-1 ">
          <div className={inter.className}>
            <div className="flex">
              <h3 className="text-4xl md:text-5xl text-center font-bold mr-3">
                Hi,
              </h3>
              <h3 className="text-4xl md:text-5xl text-center font-bold mr-3">
                {iAm}
              </h3>
              <h3 className="text-4xl md:text-5xl text-center font-bold neon-text">
                {myName}
              </h3>
            </div>
          </div>
          <div className="flex">
            <div className={vT.className}>
              <h3 className="text-3xl md:text-4xl text-center md:text-left mb-60 md:mb-0 mr-2">
                {way}
              </h3>
            </div>
            <div className={vT.className}>
              <h3 className="text-3xl md:text-4xl text-center md:text-left mb-60 md:mb-0">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
