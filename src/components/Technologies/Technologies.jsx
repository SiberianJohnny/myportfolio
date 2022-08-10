import React, { useState } from "react";
import style from "./technologies.module.scss";
import { useInView } from "react-intersection-observer";

export default function Technologies() {
  const { ref: techsRef, inView: techsInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const [techs] = useState([
    {
      name: "html5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: "html",
    },
    {
      name: "css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: "css",
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "js",
    },
    {
      name: "SASS",
      link: "https://sass-lang.com/",
      icon: "sass",
    },
    {
      name: "Less",
      link: "https://lesscss.org/",
      icon: "less",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/",
      icon: "nodejs",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "react",
    },
    {
      name: "React Redux",
      link: "https://react-redux.js.org/",
      icon: "redux",
    },
    {
      name: "Webpack",
      link: "https://webpack.js.org/",
      icon: "webpack",
    },
    {
      name: "Vue",
      link: "https://vuejs.org/",
      icon: "vue",
    },
    {
      name: "npm",
      link: "https://www.npmjs.com/",
      icon: "npm",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      icon: "git",
    },
    {
      name: "Github",
      link: "https://github.com/",
      icon: "github",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      icon: "figma",
    },
    {
      name: "Trello",
      link: "https://trello.com/",
      icon: "trello",
    },
    {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      icon: "ts",
    },
    {
      name: "Pug",
      link: "https://pugjs.org/api/getting-started.html",
      icon: "pug",
    },
  ]);

  return (
    <div className={style.techs}>
      {techs.map((item) => (
        <a
          href={item.link}
          key={item.name}
          ref={techsRef}
          target="blank"
          className={`${style.techs__link} ${
            techsInView ? style.animateTechs : ""
          }`}
        >
          <img
            src={require("../../images/techIcons/" + item.icon + ".svg")}
            alt={item.name}
            height="90px"
          />
        </a>
      ))}
    </div>
  );
}
