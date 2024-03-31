import React from "react";
import style from "./portfolio.module.scss";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import projects from "../../data/projects";
import Modal from "../Modal/Modal";

export default function Portfolio({ innerRef }) {
  const inViewOptions = {
    threshold: 0.05,
    triggerOnce: true,
  };

  const { ref: portfolioHeadingRef, inView: portfolioHeadingInView } =
    useInView(inViewOptions);
  const { ref: headingUnderlineRef, inView: headingUnderlineInView } =
    useInView(inViewOptions);
  const { ref: projectRef, inView: projectInView } = useInView(inViewOptions);

  const [modalShow, setModalShow] = useState(false);
  const [projectState, setProjectState] = useState();

  return (
    <section className={style.portfolio} id="portfolio" ref={innerRef}>
      <div className={style.portfolio__wrapper}>
        <h1
          ref={portfolioHeadingRef}
          className={`${style.portfolio__heading} ${
            portfolioHeadingInView ? style.animateHeading : ""
          }`}
        >
          Работы
        </h1>

        <div
          ref={headingUnderlineRef}
          className={`${style.portfolio__heading_underline} ${
            headingUnderlineInView ? style.animateHeadingUnderline : ""
          }`}
        ></div>
        <div className={style.projects}>
          {projects.map((item) => (
            <div
              ref={projectRef}
              className={`${style.projects__card} ${
                projectInView ? style.animateProject : ""
              }`}
              key={item.heading}
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
                  <h4 className={style.projects__card_heading}>
                    {item.heading}
                  </h4>
                  {item.majorTechs.map((tech, idx, arr) => (
                    <p className={style.projects__card_techs} key={idx}>
                      {tech} {idx === arr.length - 1 ? "" : " / "}
                    </p>
                  ))}
                </div>
                <button
                  className={style.projects__card_btn}
                  onClick={() => {
                    setModalShow(true);
                    setProjectState(item);
                  }}
                >
                  Узнать подробности
                </button>
              </div>
            </div>
          ))}
          <Modal
            modalShow={modalShow}
            onClose={() => setModalShow(false)}
            projectHeading={projectState?.heading}
            projectDescription={projectState?.description}
            imgFolder={projectState?.imgFolder}
            images={projectState?.images}
            links={projectState?.links}
          />
        </div>
      </div>
    </section>
  );
}
