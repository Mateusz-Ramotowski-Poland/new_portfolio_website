import styles from "../styles/components/ContactData.module.scss";
import { IonIcon } from "@ionic/react";
import { homeOutline, mailOutline, personOutline, timeOutline } from "../../node_modules/ionicons/icons";

export const ContactData = () => {
  return (
    <div className={styles.contact_data}>
      <div className={styles.data_element}>
        <IonIcon icon={personOutline} className={styles.icon} />
        <p>Mateusz Ramotowski</p>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={homeOutline} className={styles.icon} />
        <div>
          <p>Gdańsk</p>
          <p>Poland</p>
        </div>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={timeOutline} className={styles.icon} />
        <div>
          <p>Monday - Friday: </p>
          <p>9.00 - 18.00</p>
        </div>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={mailOutline} className={styles.icon} />
        <p>
          <a href="mailto:mateusz.ramotowski.praca@gmail.com">mateusz.ramotowski.praca@gmail.com</a>
        </p>
      </div>
    </div>
  );
};
