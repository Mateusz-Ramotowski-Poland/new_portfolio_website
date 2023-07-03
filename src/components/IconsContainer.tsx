import styles from "../styles/components/IconsContainer.module.scss";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin } from "../../node_modules/ionicons/icons";

export const IconsContainer = () => {
  return (
    <div className={styles.icons}>
      <a href="https://www.linkedin.com/in/mateusz-ramotowski-393a901a6/" target="_blank" rel="noopener noreferrer">
        <IonIcon icon={logoLinkedin} className={styles.icon} />
      </a>
      <a href="https://github.com/Mateusz-Ramotowski-Poland" target="_blank" rel="noopener noreferrer">
        <IonIcon icon={logoGithub} className={styles.icon} />
      </a>
    </div>
  );
};
