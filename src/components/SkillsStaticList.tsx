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
            <a target="_blank" href="https://en.wikipedia.org/wiki/CSS">
              CSS
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/HTML">
              HTML
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">
              JavaScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://sass-lang.com/">
              Sass
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/TypeScript">
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
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.dev/">
              React
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react-redux.js.org/">
              React Redux
            </a>
          </li>
          <li>
            <a target="_blank" href="https://reactrouter.com/en/main">
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
            <a target="_blank" href="https://git-scm.com/">
              GIT
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/GitHub">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/GitLab">
              GitLab
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.npmjs.com/">
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
            <a target="_blank" href="https://getbootstrap.com/">
              Bootstrap
            </a>
          </li>
          <li>
            <a target="_blank" href="https://chakra-ui.com/">
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
            <a target="_blank" href="https://www.docker.com/">
              Docker
            </a>
          </li>
          <li>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Node.js">
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
            <a target="_blank" href="https://jestjs.io/">
              Jest
            </a>
          </li>
          <li>
            <a target="_blank" href="https://testing-library.com/docs/react-testing-library/intro/">
              React testing library
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
