import { IconsContainer } from "../components";
import styles from "../styles/page_sections/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IconsContainer />
      <p className={styles.footer__description}>Copyright © 2023 Ramotowski Mateusz. All Rights Reserved.</p>
    </footer>
  );
};
