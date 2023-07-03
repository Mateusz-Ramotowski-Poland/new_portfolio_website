import { useState } from "react";
import { CarouselArrows, CarouselIndicators, TestimonialsItem } from "../components";
import styles from "../styles/page_sections/Testimonials.module.scss";

export const Testimonials = () => {
  const [state, setState] = useState(1);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>Testimonials</h2>
      <p className={styles.introduction}>
        Recommendations comes from{" "}
        <a href="https://www.linkedin.com/in/mateusz-ramotowski-393a901a6/" target="_blank" rel="noopener noreferrer">
          Linkedin.
        </a>
      </p>
      <CarouselArrows setState={setState} state={state} maxState={3} styles="testimonials" />
      <TestimonialsItem state={state} />
      <CarouselIndicators setState={setState} state={state} maxState={3} />
    </section>
  );
};
