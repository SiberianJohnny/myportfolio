import React from "react";
import Technologies from "../Technologies/Technologies";
import me from "../../images/me.jpg";
import style from "./about.module.scss";
import { useInView } from "react-intersection-observer";
import resume from "../../files/evgeniynovakovskiy.pdf"

export default function About({ innerRef }) {
  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: textRef, inView: textInView } = useInView(inViewOptions);
  const { ref: imageRef, inView: imageInView } = useInView(inViewOptions);
  const { ref: headingRef, inView: headingInView } = useInView(inViewOptions);
  const { ref: headingUnderlineRef, inView: headingUnderlineInView } =
    useInView(inViewOptions);

  return (
    <section className={style.about} id="about" ref={innerRef}>
      <h1
        ref={headingRef}
        className={`${style.about__heading} ${headingInView ? style.animateHeading : ""
          }`}
      >
        Обо мне
      </h1>
      <div
        ref={headingUnderlineRef}
        className={`${style.about__heading_underline} ${headingUnderlineInView ? style.animateHeadingUnderline : ""
          }`}
      ></div>
      <article className={style.about__about_block}>
        <div className={style.about__info_block}>
          <p
            ref={textRef}
            className={`${style.about__info} ${textInView ? style.animateText : ""
              }`}
          >
            Мне всегда было интересно разбираться, как работает мир вокруг. И, так
            как невозможно не замечать насколько дружелюбнее и красивее стали
            сайты, я решил освоить Web разработку, в которую погружаюсь уже
            практически два года, нахожу её очень увлекательной и не планирую
            останавливаться на достигнутом :)
          </p>
          <div className={style.about__links}>
            <a className={style.about__link} target="_blank" href="https://linkedin.com/in/evgeniy-novakovskiy-369208238"><img className={style.about__links_img} src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" /></a>
            <a className={style.about__link} target="_blank" href="https://tomsk.hh.ru/resume/f07332d9ff09dfd1400039ed1f57325a7a6130"><img className={style.about__links_img} src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png" /></a>
            <a className={style.about__link} target="_blank" href={resume} download><img className={style.about__links_img} src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" /></a>
          </div>
        </div>
        <img
          src={me}
          alt="It's me!"
          ref={imageRef}
          className={`${style.about__image} ${imageInView ? style.animateImage : ""
            }`}
        />
      </article>
      <article className={style.about__techs}>
        <Technologies />
      </article>
    </section>
  );
}
