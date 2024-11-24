import Image from "next/image";
import ava from "../../assets/img/ava.jpeg";
import photo from "../../assets/img/alvienas.JPG";

const About = () => {
  return (
    <div id="about" className="w-11/12 md:container mx-auto py-20">
      <div className="min-h-screen md:h-screen mx-auto container flex flex-col md:flex-row md:space-x-10">
        <div className="content-center md:w-2/3">
          <Image
            src={photo}
            alt="alvienas"
            className="mx-auto  md:w-2/3 rounded-full"
          />
        </div>
        <div className="content-center">
          <div className="mt-5">
            <h3 className="text-5xl font-bold mb-5 text-center md:text-justify">
              About Me
            </h3>
            <p className="mb-5 text-center md:text-justify md:pr-20">
            My name is Alvienas Yandika, commonly known as Alvin. Bachelor of Science in Computer Science from Sunan Gunung Djati Bandung. Proficient in HTML, CSS, JavaScript, TypeScript, React, Express, and React Native. Experienced in software development, graphic design, and video editing.
            </p>
            <p className="mb-5 pb-5 text-center md:text-justify md:pr-20">
            Possess a strong understanding of design patterns, algorithms, and full-stack development concepts. Passionate about continuous learning, teamwork, and solving problems through innovative and creative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
