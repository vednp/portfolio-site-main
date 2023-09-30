import React from "react";
import photo from "../assets/photuuu.png";
function About() {
  return (
    <div className="flex ">
      <section className="min-h-[80vh] flex flex-col justify-center sm:px-10 md:px-20 lg:px-40 xl:px-64 py-10">
      <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-500">
        I am a Computer Science undergraduate with a passion for technology and
        software development. My journey in the world of programming began when
        I wrote my first "Hello, World!" program, and I have been captivated by
        the endless possibilities of coding ever since.
      </p>
      <p className="text-gray-500">
        As a developer, I am proficient in a wide range of technologies,
        including JavaScript, React, HTML/CSS, Node.js, and MongoDB. I am also
        experienced in UI/UX design and version control with Git.
      </p>
      <p className="text-gray-500">
        My goal is to leverage my skills and knowledge to create innovative and
        user-friendly web applications. I am enthusiastic about learning new
        technologies and staying up-to-date with industry trends to ensure that
        I deliver high-quality solutions to every project I undertake.
      </p>
    </section>
      </section>
      <div className="mt-36 mr-4 w-[40rem] flex-col">
        <img src={photo} alt="my_photo" />
        <p className=" text-xl  py-6 font-medium">Contact</p>
        <p className="font-light">pahuneved@gmail.com</p>
      </div>
    </div>
  );
}

export default About;
