import { FormEvent, useState } from "react";
import { CarouselArrows, CarouselIndicators, ProjectsItem } from "../components";
import styles from "../styles/page_sections/Projects.module.scss";
import { Project } from "../shared";
import { projects } from "../data";

export const Projects = () => {
  const [state, setState] = useState(0);
  const [time, setTime] = useState("all");
  const [technology, setTechnology] = useState("all");

  function filterProjects(projects: Project[]) {
    if (technology === "all" && time === "all") {
      return projects;
    }

    if (time === "all" && technology !== "all technologies") {
      return projects.filter((proj) => proj.technologyFilter === technology);
    }

    if (time !== "all" && technology === "all") {
      return projects.filter((proj) => proj.timeFilter === time);
    }

    if (time !== "all" && technology !== "all") {
      return projects.filter((proj) => proj.timeFilter === time).filter((proj) => proj.technologyFilter === technology);
    }

    return projects;
  }

  const handleClick = () => setState(0);

  const handleInputTechnology = (event: FormEvent<HTMLSelectElement>) => {
    setTechnology((event.target as HTMLSelectElement).value);
  };
  const handleInputTime = (event: FormEvent<HTMLSelectElement>) => {
    setTime((event.target as HTMLSelectElement).value);
  };

  const filteredProjects = filterProjects(projects);
  const chosen = filteredProjects[state];
  const maxState = filteredProjects.length - 1;

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.introduction}>
        Below you can find all the projects I've done since December 2021. I made all of these projects myself - they are not projects from online
        tutorials.
      </p>
      <menu className={styles.menu}>
        <select className={styles.input} onClick={handleClick} onInput={handleInputTime}>
          <option value="all">Whole time</option>
          <option value="IV/2023">IV-VIII 2023</option>
          <option value="XI/2022">XI 2022</option>
          <option value="VII/2022">VII-X 2022</option>
          <option value="IV/2022">IV-VI 2022</option>
          <option value="III/2022">III-IV 2022</option>
          <option value="XII/2021">XII 2021</option>
        </select>
        <select className={styles.input} onClick={handleClick} onInput={handleInputTechnology}>
          <option value="all">All technologies</option>
          <option value="react,ts">React, TypeScript</option>
          <option value="node">Node.js</option>
          <option value="only html,sass,ts">Typescript, Sass, HTML</option>
          <option value="only html,css,js">JavaScript, CSS, HTML</option>
          <option value="only html,css">CSS, HTML</option>
        </select>
      </menu>
      <ProjectsItem project={chosen} />
      {chosen && (
        <>
          <CarouselArrows setState={setState} state={state} maxState={maxState} styles="projects" />
          <CarouselIndicators setState={setState} state={state} maxState={maxState} />
        </>
      )}
    </section>
  );
};
