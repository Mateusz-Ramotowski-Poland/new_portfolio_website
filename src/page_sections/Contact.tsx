import { ContactData, ContactForm, GoogleMap } from "../components";
import styles from "../styles/page_sections/Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.container}>
        <ContactData />
        <ContactForm />
        <GoogleMap />
      </div>
    </section>
  );
};
