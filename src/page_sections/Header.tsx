import styles from "../styles/page_sections/Header.module.scss";
import { IconsContainer } from "../components";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import pdf from "../pdf/resume.pdf";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const cx = classNames.bind(styles);
  let headerClass = cx({
    header: true,
    active: isActive,
  });
  let burgerClass = cx({
    nav__burger: true,
    active: isActive,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) setIsActive(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <div className={styles.nav__links}>
          <button className={burgerClass} onClick={handleClick}>
            <div className={styles.nav__burger__line}></div>
          </button>

          <ul className={styles.nav__ul}>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href="#about">
                About
              </a>
            </li>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href="#skills">
                Skills
              </a>
            </li>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href="#projects">
                Projects
              </a>
            </li>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href="#contact">
                Contact
              </a>
            </li>
            <li className={styles.nav__li}>
              <a className={styles.nav__li__link} href={pdf} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <IconsContainer />
      </nav>
    </header>
  );
};
