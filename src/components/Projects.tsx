import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "../app/styles/projects.css";

const data = [
  {
    id: 0,
    title: "Todo List App",
    desc: "A TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/p1.jpg",
    tags: ["Node", "Typescript", "Inquirer"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A TypeScript based app to track time with an interactive countdown feature.",
    img: "/p2.jpg",
    tags: ["Node", "Typescript", "Inquirer"],
  },
  {
    id: 2,
    title: "Word Counter",
    desc: "A TypeScript based tool for word count.",
    img: "/p3.jpg",
    tags: ["Node", "Inquirer", "Typescript"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
    img: "/p4.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/p5.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 5,
    title: "Simple Calculator App",
    desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
    img: "/p6.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
