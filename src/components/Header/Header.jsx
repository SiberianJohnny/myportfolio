import React from "react";
import style from "./header.module.scss";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

export default function Header({ innerRef }) {
  return (
    <section className={style.header} id="home" ref={innerRef}>
      <div className={style.header__wrapper}>
        <div className={style.header__text}>
          Привет, меня зовут <span>Евгений</span>. <br />Я Front-End Web
          разработчик.
        </div>
        <a href="#about" className={style.header__button}>
          Моё портфолио
          <Icon
            path={mdiArrowRight}
            size={1}
            color="white"
            className={style.header__button_icon}
          />
        </a>
      </div>
    </section>
  );
}
