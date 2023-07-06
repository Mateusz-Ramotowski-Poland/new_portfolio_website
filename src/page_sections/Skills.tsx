import { useEffect, useState } from "react";
import styles from "../styles/page_sections/Skills.module.scss";
// @ts-ignore
import TagCanvas from "../../node_modules/tag-canvas/index.js";
import { SkillsRotatingList, SkillsStaticList } from "../components";

function createRotatingCloud() {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      initial: [0.33, 0.68],
      textColour: "#1873f0",
      outlineColour: "#ffffff",
      depth: 0.9,
      minSpeed: 1,
      maxSpeed: 0.006,
      textHeight: 25,
      wheelZoom: false,
    });
  } catch (e) {
    (document.getElementById("myCanvasContainer") as HTMLDivElement).style.display = "none";
  }
}

export const Skills = () => {
  const [technologies, setTechnologies] = useState<"rotating" | "static">("rotating");

  const handleClick = () => {
    const element = document.getElementById("myCanvasContainer") as HTMLDivElement;
    if (element) {
      TagCanvas.Delete("myCanvas");
      setTechnologies("static");
    } else {
      setTechnologies("rotating");
    }
  };

  useEffect(() => {
    if (technologies === "rotating") {
      createRotatingCloud();
    }
  }, [technologies]);

  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <p className={styles.introduction}>
        Since October 2021, I have been using the following technologies. You can check the <a href="#projects">projects section below </a>
        or my{" "}
        <a href="https://github.com/Mateusz-Ramotowski-Poland" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        to see in which projects I was using these technologies.
      </p>
      {technologies === "rotating" && (
        <>
          <div className={styles.canvas_container} id="myCanvasContainer">
            <canvas width="600" height="600" id="myCanvas" className={styles.canvas}>
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags" className={styles.tagsList}>
            <SkillsRotatingList />
          </div>
        </>
      )}
      {technologies === "static" && <SkillsStaticList />}
      <menu className={styles.menu}>
        <button onClick={handleClick} className={styles.button}>
          {technologies === "rotating" ? "Show static list" : "Show rotating cloud"}
        </button>
      </menu>
    </section>
  );
};
