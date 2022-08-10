import React from "react";
import style from "./portfolio.module.scss";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Portfolio({ innerRef }) {
  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: portfolioHeadingRef, inView: portfolioHeadingInView } =
    useInView(inViewOptions);
  const { ref: headingUnderlineRef, inView: headingUnderlineInView } =
    useInView(inViewOptions);

  const [modalShow, setModalShow] = useState(false);
  const [projectState, setProjectState] = useState();
  const [projects, setProjects] = useState([
    {
      background: "main",
      heading: "MyPortfolio",
      imgFolder: "myPortfolio",
      images: ["header"],
      majorTechs: ["React, SCSS"],
      links: [
        {
          source: "GitHub",
          link: "https://github.com/SiberianJohnny/gb_vue_project",
        },
      ],
      description: [
        "Мой личный сайт, на котором вы сейчас находитесь :)",
        <br />,
        <br />,
        "Думаю, эта работа - хорошая демонстрация моих навыков, которую стоит добавить в портфолио.",
      ],
    },
    {
      background: "main",
      heading: "trueFitness",
      imgFolder: "trueFitness",
      images: [
        "main",
        "carousels",
        "navBar",
        "trainingCards",
        "trainingPage",
        "trainingPageMore",
      ],
      majorTechs: ["React", "NodeJS", "SCSS"],
      links: [
        {
          source: "GitHub",
          link: "https://github.com/Dubrovskiy40/trueFitness/tree/develop",
        },
      ],
      description: [
        "Сайт-библиотека для помощи в занятиях фитнессом. Итоговый проект для завершения обучения в Geek Brains. React. Основная задача проекта - тренировка навыков командой разработки и agile разработки. В частности, пробовали такие методологии как Scrum и Scrumban.",
        <br />,
        <br />,
        "Моя работа: ",
        <br />,
        "Карусель, карточка тренировки, раздел тренировок, страницу тренировки, навигацию в ЛК, общая информация в ЛК, функционал указанных компонентов и связь между ними, а так же между компонентами опросника (/survey) и Цели (в лк). Написал структуру БД для карусели и тренировок, прописал необходимые запросы для фетча.",
      ],
    },
    {
      background: "main",
      heading: "Shop",
      imgFolder: "Shop",
      images: ["main", "deals", "filter", "cart", "registration", "footer"],
      majorTechs: ["HTML", "SCSS"],
      links: [
        {
          source: "VIEW SITE",
          link: "https://siberianjohnny.github.io/",
        },
      ],
      description: [
        "Один из первых учебных проектов. Страница онлайн магазина, на которой практиковались исключительно навыки вёрстки, в том числе adaptive и responsive",
      ],
    },
    {
      background: "messages",
      heading: "Chat",
      imgFolder: "Chat",
      images: ["messages", "chats", "auth"],
      majorTechs: ["React", "NodeJS"],
      links: [
        {
          source: "GitHub",
          link: "https://github.com/SiberianJohnny/react-chat",
        },
      ],
      description: [
        "Чат, написанный на React с бэкендом на node express с возможностью создания новых чатов, отправки сообщений и авторизацией.",
        <br />,
        <br />,
        "Также применяются: ",
        <br />,
        "Redux, react Router, react testing library, redux persist, redux thunk, jest.",
      ],
    },
    {
      background: "chart",
      heading: "Chart",
      imgFolder: "Vuechart",
      images: ["dashboard", "list", "newcategory", "chart", "chartcancel"],
      majorTechs: ["Vue"],
      links: [
        {
          source: "GitHub",
          link: "https://github.com/SiberianJohnny/gb_vue_project",
        },
      ],
      description: [
        "Калькулятор расходов на Vue. Реализовано добавление новых расходов, привязанных к конкретным категориям, создание новых категорий, графическое отображение данных на диаграмме.",
        <br />,
        <br />,
        "Использованы:",
        <br />,
        "Vue, vue-chartjs, chart.js, Vuetify, Vuex.",
      ],
    },
  ]);

  return (
    <section className={style.portfolio} id="portfolio" ref={innerRef}>
      <div className={style.portfolio__wrapper}>
        <h1
          ref={portfolioHeadingRef}
          className={`${style.portfolio__heading} ${
            portfolioHeadingInView ? style.animateHeading : ""
          }`}
        >
          Portfolio
        </h1>

        <div
          ref={headingUnderlineRef}
          className={`${style.portfolio__heading_underline} ${
            headingUnderlineInView ? style.animateHeadingUnderline : ""
          }`}
        ></div>
        <div className={style.projects}>
          {projects.map((item) => (
            <div className={style.projects__card} key={item.heading}>
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
