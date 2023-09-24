import React from "react";
import photo from "../assets/photuuu.png"
function About() {
  return (
<div className="flex ">
    <section className="min-h-[80vh] flex flex-col justify-center sm:px-10 md:px-20 lg:px-40 xl:px-64 py-10">
      <h1 className="text-2xl font-normal">About</h1>
      <p className="leading-loose pt-4 font-light">
        I am a computer science undergrad for the University of Cambridge. I am
        based at the Cambridge Centre for Advanced Research and Education in
        Singapore. I received my PhD in Chemistry from University College London
        in 2018. My CV can be found here.
      </p>
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
