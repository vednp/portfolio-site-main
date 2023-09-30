import React from "react";

const skills = [
  {
    name: "Web Development",
    image: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png", // You need to provide the actual image path
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "React",
    image: "https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616402_eeFIruMMzI8pFF4pkAmDjywdMWu9TQsT.jpg",
  },
  {
    name: "HTML/CSS",
    image: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
  },
  {
    name: "Responsive Design",
    image: "https://img.icons8.com/?size=160&id=p18SuBMiR84K&format=png",
  },
  {
    name: "Node.js",
    image: "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
  },
  {
    name: "Express.js",
    image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/?size=160&id=iFoT5Ds3iK1c&format=png",
  },
  {
    name: "UI/UX Design",
    image: "https://img.icons8.com/?size=100&id=53451&format=png",
  },
  {
    name: "Version Control (Git)",
    image: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png",
  },
  {
    name: "Machine Learning",
    image: "https://img.icons8.com/?size=160&id=FgCCywmSSE6U&format=png",
  },
  {
    name: "Python",
    image: "https://img.icons8.com/?size=96&id=13441&format=png",
  },
  {
    name: "TensorFlow",
    image: "https://img.icons8.com/?size=96&id=n3QRpDA7KZ7P&format=png",
  },
  {
    name: "PyTorch",
    image: "data:image/png;base64,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",
  },
];

function Skills() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mx-auto mb-2"
            />
            <p className="text-center font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
