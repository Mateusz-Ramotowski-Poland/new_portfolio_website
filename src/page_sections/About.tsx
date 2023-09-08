import styles from "../styles/page_sections/About.module.scss";
import { IonIcon } from "@ionic/react";
import {
  bicycleOutline,
  buildOutline,
  bulbOutline,
  bookOutline,
  carOutline,
  desktopOutline,
  homeOutline,
  logoJavascript,
  schoolOutline,
} from "../../node_modules/ionicons/icons";
import about1 from "../images/about1.webp";
import about2 from "../images/about2.webp";

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>
      <div className={styles.description}>
        <div className={styles.text_icons}>
          <h3 className={styles.subsection_title}>Education</h3>
          <div className={styles.subsection}>
            <div className={styles.icons}>
              <IonIcon icon={homeOutline} className={styles.icon} />
              <IonIcon icon={schoolOutline} className={styles.icon} />
            </div>
            <p>
              I was born and raised in Masuria. Thanks to my technical mind, in Gdańsk, I obtained the title of electronics technician and a master's
              degree in automation and robotics. I wrote my first computer program in 2013 programming PLC controller. During my studies, I learned
              the basics of several programming languages: Python, C, C++, PHP, JS, HTML, CSS, Matlab and used MySQL and MongoDB databases. My two
              diploma thesis focused on creating and describing the operation of computer programs.
            </p>
          </div>
          <img src={about1} alt="coding" className={styles.img_small_screen}></img>
          <h3 className={styles.subsection_title}>Professional work</h3>
          <div className={styles.subsection}>
            <div className={styles.icons}>
              <IonIcon icon={bulbOutline} className={styles.icon} />
              <IonIcon icon={buildOutline} className={styles.icon} />
              <IonIcon icon={carOutline} className={styles.icon} />
              <IonIcon icon={desktopOutline} className={styles.icon} />
            </div>
            <p>
              I worked in technical professions: as a programmer, as an electrician - working both in the design office and in production, electrical
              fitter at the shipyard and automation engineer in the service department traveling around Poland. Since October 2021 I've been learning
              to program by myself by creating my own applications and websites.
            </p>
          </div>
          <img src={about2} alt="code" className={styles.img_small_screen}></img>
          <h3 className={styles.subsection_title}>Interests</h3>
          <div className={styles.subsection}>
            <div className={styles.icons}>
              <IonIcon icon={logoJavascript} className={styles.icon} />
              <IonIcon icon={bicycleOutline} className={styles.icon} />
              <IonIcon icon={bookOutline} className={styles.icon} />
            </div>
            <p>
              I like creating websites. It gives me joy to see a good, responsive website that I created after many hours of writing and debugging the
              code. In my free time, I like physical activity -swimming and cycling. I also love strategy board games and books.
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <img src={about1} alt="coding" className={styles.img}></img>
          <img src={about2} alt="code" className={styles.img}></img>
        </div>
      </div>
    </section>
  );
};
