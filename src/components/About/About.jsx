import React from "react";
import Technologies from "../Technologies/Technologies";
import me from "../../images/me.jpg";
import style from "./about.module.scss";
import { useInView } from "react-intersection-observer";

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
        className={`${style.about__heading} ${
          headingInView ? style.animateHeading : ""
        }`}
      >
        Обо мне
      </h1>
      <div
        ref={headingUnderlineRef}
        className={`${style.about__heading_underline} ${
          headingUnderlineInView ? style.animateHeadingUnderline : ""
        }`}
      ></div>
      <article className={style.about__about_block}>
        <p
          ref={textRef}
          className={`${style.about__info} ${
            textInView ? style.animateText : ""
          }`}
        >
          Мне всегда было интересно разбираться, как работает мир вокруг. И, так
          как невозможно не замечать насколько дружелюбнее и красивее стали
          сайты, я решил освоить Web разработку, в которую погружаюсь уже
          практически два года, нахожу её очень увлекательной и не планирую
          останавливаться на достигнутом :)
        </p>
        <img
          src={me}
          alt="It's me!"
          ref={imageRef}
          className={`${style.about__image} ${
            imageInView ? style.animateImage : ""
          }`}
        />
      </article>
      <article className={style.about__techs}>
        <Technologies />
      </article>
    </section>
  );
}
