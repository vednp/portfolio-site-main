import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace with your GitHub username
    const username = "vednp";

    // Make a GET request to fetch your GitHub repositories
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
      });
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <p className="text-gray-500">
        Below is a list of projects. Some of these are my own, while others I
        have contributed to.
      </p>
      <br />
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-500">{project.description}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
