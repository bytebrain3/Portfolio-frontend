import React from "react";
import { motion } from 'framer-motion';
import ProjectCard from '@ui/ProjectCard.jsx';
const ProjectPage = () => {
  const projects = [
    {
      description: "ArchLinux distribution with its own GUI written in JavaScript.",
      technology_use: ["HTML", "CSS", "React", "JavaScript"],
      url: "https://jzitnik.dev/images/klindos.webp",
      alt: "ArchLinux GUI Project"
    },
    {
      description: "Personal Finance Tracker App for managing budgets and expenses.",
      technology_use: ["Vue.js", "Node.js", "MongoDB", "TailwindCSS"],
      url: "https://jzitnik.dev/images/portfolio/pixelnite/1.webp", // Replace with actual image URL
      alt: "Personal Finance Tracker"
    },
    {
      description: "E-commerce Website for selling electronics with integrated payment gateway.",
      technology_use: ["Nuxt.js", "Express.js", "Stripe API", "PostgreSQL"],
      url: "https://jzitnik.dev/images/quizapp.webp", // Replace with actual image URL
      alt: "E-commerce Website"
    },
        {
      description: "ArchLinux distribution with its own GUI written in JavaScript.",
      technology_use: ["HTML", "CSS", "React", "JavaScript"],
      url: "https://jzitnik.dev/images/klindos.webp",
      alt: "ArchLinux GUI Project"
    },
    {
      description: "Personal Finance Tracker App for managing budgets and expenses.",
      technology_use: ["Vue.js", "Node.js", "MongoDB", "TailwindCSS"],
      url: "https://jzitnik.dev/images/portfolio/pixelnite/1.webp", // Replace with actual image URL
      alt: "Personal Finance Tracker"
    },
    {
      description: "E-commerce Website for selling electronics with integrated payment gateway.",
      technology_use: ["Nuxt.js", "Express.js", "Stripe API", "PostgreSQL"],
      url: "https://jzitnik.dev/images/quizapp.webp", // Replace with actual image URL
      alt: "E-commerce Website"
    }
  ];

  return (

<div className="w-full font-poppins h-auto p-3 bg-zinc-900 text-white dark:text-white text-center">
        <h1 className="font-poppinsbold flex flex-row text-3xl justify-center py-4 space-x-4">
            <p>What's I Built</p> <p className="font-bungee">?</p>

        </h1>
        <div className="lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              description={item.description}
              technology_use={item.technology_use}
              url={item.url}
              alt={item.alt}
            />
          ))}
        </div>
        
</div>

  );
};

export default ProjectPage;