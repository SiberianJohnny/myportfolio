import { useState, useEffect } from "react";
import style from "./carousel.module.scss";
import Icon from "@mdi/react";
import { mdiArrowRightBold, mdiArrowLeftBold } from "@mdi/js";

const CarouselComp = ({ imgFolder, images }) => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    setIndex(nextIndex < 0 ? images.length - 1 : nextIndex);
  };

  useEffect(() => {
    const imgs = images.map((imgName) =>
      require(`../../images/projectImages/${imgFolder}/${imgName}.jpg`)
    );
    setLoadedImages(imgs);
  }, [imgFolder, images]);

  if (loadedImages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.carousel}>
      <button onClick={slideLeft} className={style.carousel__btn}>
        <Icon
          path={mdiArrowLeftBold}
          size={1.3}
          color="white"
          className={style.carousel__icon}
        />
      </button>
      <img
        src={require("../../images/projectImages/" +
          imgFolder +
          "/" +
          images[index] +
          ".jpg")}
        className={style.carousel__img}
        alt="Иллюстрация проекта"
      />
      <button onClick={slideRight} className={style.carousel__btn}>
        <Icon
          path={mdiArrowRightBold}
          size={1.3}
          color="white"
          className={style.carousel__icon}
        />
      </button>
    </div>
  );
};

export default CarouselComp;
