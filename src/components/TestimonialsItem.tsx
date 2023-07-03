import styles from "../styles/components/TestimonialsOpinion.module.scss";
import testimonials1 from "../images/testimonials1.jpg";
import testimonials2 from "../images/testimonials2.jpg";
import testimonials3 from "../images/testimonials3.jpg";
import testimonials4 from "../images/testimonials4.jpg";

interface Props {
  state: number;
}

export const TestimonialsItem = (props: Props) => {
  const testimonials = [
    {
      opinion:
        "I recommend the man. Verbal and trustworthy. He has a strong moral backbone, so you don't have to look at his hands, because it is certain that he will do his job well (and help others at the same time).",
      image: testimonials1,
      name: "Przemysław Niedźwiecki",
      job: "Film producer",
    },
    {
      opinion:
        "What makes Matthew different? Emanating calm, pedantic perfectionism and deep analytics in solving tasks. It is enough to give him the right amount of time and he will work out all the scenarios of the entrusted problem and implement them diligently. I encourage you to cooperate with Mateusz, especially in matters that require patience and determination. Good luck!",
      image: testimonials2,
      name: "Piotr Krupa",
      job: "Team Lead Frontend | Branch Manager",
    },
    {
      opinion:
        "I worked with Mateusz for a very short time, but I can certainly say that he is conscientious, precise and very ambitious. He will be great at work that requires high precision and analytical skills.",
      image: testimonials3,
      name: "Dagmara Gadomska",
      job: "HR Business Partner",
    },
    {
      opinion: "I recommend a friend - open to novelties and self-improvement, persistent and diligent.",
      image: testimonials4,
      name: "Krzysztof Wiedrycki",
      job: "IT specialist",
    },
  ];

  const chosen = testimonials[props.state];

  return (
    <div className={styles.container}>
      <p className={styles.opinion}>{chosen.opinion}</p>
      <img src={chosen.image} className={styles.img} alt={chosen.name} />
      <h3 className={styles.person}>{chosen.name}</h3>
      <h4 className={styles.job}>{chosen.job}</h4>
    </div>
  );
};
