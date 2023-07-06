import styles from "../styles/components/SkillsStaticList.module.scss";
import { IonIcon } from "@ionic/react";
import { bugOutline, constructOutline, logoCss3, logoJavascript, logoNodejs, logoReact } from "../../node_modules/ionicons/icons";

export const SkillsStaticList = () => {
  return (
    <div className={styles.static_technologies}>
      <section>
        <h3 className={styles.section_title}>Basics</h3>
        <IonIcon icon={logoJavascript} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/CSS" rel="noopener noreferrer">
              CSS
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/HTML" rel="noopener noreferrer">
              HTML
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript" rel="noopener noreferrer">
              JavaScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://sass-lang.com/" rel="noopener noreferrer">
              Sass
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/TypeScript" rel="noopener noreferrer">
              TypeScript
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={styles.section_title}>React related</h3>
        <IonIcon icon={logoReact} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://nextjs.org/" rel="noopener noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.dev/" rel="noopener noreferrer">
              React
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react-redux.js.org/" rel="noopener noreferrer">
              React Redux
            </a>
          </li>
          <li>
            <a target="_blank" href="https://reactrouter.com/en/main" rel="noopener noreferrer">
              React Router
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={styles.section_title}>Developer tools</h3>
        <IonIcon icon={constructOutline} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://git-scm.com/" rel="noopener noreferrer">
              GIT
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/GitHub" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/GitLab" rel="noopener noreferrer">
              GitLab
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.npmjs.com/" rel="noopener noreferrer">
              NPM
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={styles.section_title}>Css Libraries</h3>
        <IonIcon icon={logoCss3} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://getbootstrap.com/" rel="noopener noreferrer">
              Bootstrap
            </a>
          </li>
          <li>
            <a target="_blank" href="https://chakra-ui.com/" rel="noopener noreferrer">
              Chakra UI
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={styles.section_title}>Backend </h3>
        <IonIcon icon={logoNodejs} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://www.docker.com/" rel="noopener noreferrer">
              Docker
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Node.js" rel="noopener noreferrer">
              Node.js
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={styles.section_title}>Frontend Testing</h3>
        <IonIcon icon={bugOutline} className={styles.icon} />
        <ul className={styles.static_list}>
          <li>
            <a target="_blank" href="https://jestjs.io/" rel="noopener noreferrer">
              Jest
            </a>
          </li>
          <li>
            <a target="_blank" href="https://testing-library.com/docs/react-testing-library/intro/" rel="noopener noreferrer">
              React testing library
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
