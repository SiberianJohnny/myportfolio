import React from "react";
import style from "./portfolio.module.scss";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import projects from "../../data/projects";
import Modal from "../Modal/Modal";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

export default function Portfolio({ innerRef }) {
  const inViewOptions = {
    threshold: 0.05,
    triggerOnce: true,
  };

  const { ref: portfolioHeadingRef, inView: portfolioHeadingInView } =
    useInView(inViewOptions);
  const { ref: headingUnderlineRef, inView: headingUnderlineInView } =
    useInView(inViewOptions);

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
            <PortfolioCard
              item={item}
              setModalShow={setModalShow}
              setProjectState={setProjectState}
              key={item.heading}
            />
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
