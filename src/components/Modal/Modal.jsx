import React, { useEffect, useState } from "react";
import style from "./modal.module.scss";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import CarouselComp from "../Carousel/Carousel";
import { mdiCloseThick } from "@mdi/js";
import Icon from "@mdi/react";

const Modal = ({
  modalShow,
  onClose,
  projectHeading,
  projectDescription,
  images,
  imgFolder,
  links,
}) => {
  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: modalRef, inView: modalInView } = useInView(inViewOptions);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <>
      {modalShow ? (
        <div className={`${style.modal}`} onClick={onClose}>
          <div
            ref={modalRef}
            className={`${style.modal__content} ${
              modalInView ? style.animateModal : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <header className={style.modal__carousel}>
              <CarouselComp images={images} imgFolder={imgFolder} />
            </header>
            <main className={style.modal__main}>
              <h2 className={style.modal__title}>{projectHeading}</h2>
              <p className={style.modal__description}>{projectDescription}</p>
            </main>
            <footer className={style.modal__footer}>
              {links.map((link) => (
                <a
                  href={link.link}
                  target="blank"
                  className={style.modal__btn}
                  key={link.link}
                >
                  {link.source}
                </a>
              ))}
              <button className={style.modal__close} onClick={onClose}>
                <Icon
                  path={mdiCloseThick}
                  size={1}
                  color="gray"
                  className={style.modal__close_icon}
                />
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
