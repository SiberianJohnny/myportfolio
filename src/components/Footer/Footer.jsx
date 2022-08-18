import React from "react";
import style from "./footer.module.scss";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiGmail, mdiSend } from "@mdi/js";

export default function Header() {
  const socials = [
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/evgeniy-novakovskiy-369208238",
      icon: mdiLinkedin,
    },
    {
      name: "Github",
      link: "https://github.com/SiberianJohnny",
      icon: mdiGithub,
    },
    {
      name: "Telegram",
      link: "https://t.me/siberianjohnny",
      icon: mdiSend,
    },
    {
      name: "Gmail",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=allidon93@gmail.com",
      icon: mdiGmail,
    },
  ];

  const year = new Date();

  return (
    <footer className={style.footer__wrapper} id="contacts">
      <ul className={style.footer}>
        {socials.map((social) => (
          <li className={style.footer__item} key={social.name}>
            <a
              href={social.link}
              target="blank"
              className={`${style.footer__link}`}
            >
              <Icon
                path={social.icon}
                size={1.5}
                color="white"
                className={style.footer__link_icon}
              />
            </a>
          </li>
        ))}
      </ul>
      <p className={style.footer__copyright}>
        Евгений Новаковский <span>&copy; {year.getFullYear()}</span>
      </p>
    </footer>
  );
}
