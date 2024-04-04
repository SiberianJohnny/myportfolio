import React from "react";
import { useInView } from "react-intersection-observer";
import style from "./portfoliocard.module.scss";

const PortfolioCard = ({ item, setProjectState, setModalShow }) => {
  const inViewOptions = {
    threshold: 0.8,
    triggerOnce: true,
  };

  const { ref: projectRef, inView: projectInView } = useInView(inViewOptions);

  return (
    <div
      ref={projectRef}
      className={`${style.projects__card} ${
        projectInView ? style.animateProject : ""
      }`}
    >
      <img
        src={require("../../images/projectImages/" +
          item.imgFolder +
          "/" +
          item.background +
          ".jpg")}
        alt={item.heading}
        className={style.projects__card_bg}
      />
      <div className={style.projects__card_onhover}>
        <div className={style.projects__card_top}>
          <h4 className={style.projects__card_heading}>{item.heading}</h4>
          {item.majorTechs.map((tech, idx, arr) => (
            <p className={style.projects__card_techs} key={idx}>
              {tech} {idx === arr.length - 1 ? "" : " / "}
            </p>
          ))}
        </div>
        <button
          className={style.projects__card_btn}
          onClick={() => {
            setProjectState(item);
            setModalShow(true);
          }}
        >
          Узнать подробности
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
