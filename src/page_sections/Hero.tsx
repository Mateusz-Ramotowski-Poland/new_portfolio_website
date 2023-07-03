import { useEffect, useRef } from "react";
import styles from "../styles/page_sections/Hero.module.scss";
import Typed from "typed.js";

export const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      backDelay: 2000,
      backSpeed: 50,
      loop: true,
      strings: ["a web developer", "an engineer", "a mountain hiker"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.hero} title="Ramotowski Mateusz in the mountains">
      <div className={styles.hero__container}>
        <h1>Mateusz Ramotowski</h1>
        <p>
          I'm <span className={styles.hero__container__typed} ref={typedEl}></span>
        </p>
        <p>ready for new challenges.</p>
      </div>
    </section>
  );
};
