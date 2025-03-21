import notFoundImage from "../../assets/img/404.webp";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img className={css.image} src={notFoundImage} alt="image 404" />
    </div>
  );
};

export default NotFoundPage;
