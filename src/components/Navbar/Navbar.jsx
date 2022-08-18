import { useState, useEffect } from "react";
import style from "./navbar.module.scss";

export default function Navbar({ activeElement }) {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    setActiveNav(activeElement);
  }, [activeElement]);

  return (
    <nav className={style.navbar__wrapper}>
      <ul className={style.navbar}>
        <li className={style.navbar__item}>
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={`${style.navbar__link} ${
              activeNav === "#home" ? style.active : ""
            }`}
          >
            Главная
          </a>
        </li>
        <li className={style.navbar__item}>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={`${style.navbar__link} ${
              activeNav === "#about" ? style.active : ""
            }`}
          >
            Обо мне
          </a>
        </li>
        <li className={style.navbar__item}>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={`${style.navbar__link} ${
              activeNav === "#portfolio" ? style.active : ""
            }`}
          >
            Работы
          </a>
        </li>
        <li className={style.navbar__item}>
          <a
            href="#contacts"
            onClick={() => setActiveNav("#contacts")}
            className={`${style.navbar__link} ${
              activeNav === "#contacts" ? style.active : ""
            }`}
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
