import Navigation from "../Navigation/Navigation";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
    </>
  );
};

export default Layout;
