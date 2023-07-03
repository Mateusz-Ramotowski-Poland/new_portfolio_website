import { Project } from "../shared";
import styles from "../styles/components/ProjectsItem.module.scss";

interface Props {
  project: Project;
}

export const ProjectsItem = (props: Props) => {
  if (!props.project) {
    return <div className={styles.info}>There are no such projects. Change your search criteria.</div>;
  }

  return (
    <div className={styles.container}>
      <img src={props.project.urlImg} className={styles.img} alt="Project photo"></img>
      <h3 className={styles.title}>{props.project.title}</h3>
      <p className={styles.description}>{props.project.description}</p>
      <div className={styles.buttons}>
        <a href={props.project.urlGithub} target="_blank" className={styles.button}>
          Github
        </a>
        {props.project.urlLive && (
          <a href={props.project.urlLive} target="_blank" className={styles.button}>
            Live demo
          </a>
        )}
      </div>
    </div>
  );
};
