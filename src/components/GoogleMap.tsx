import styles from "../styles/components/GoogleMap.module.scss";

export const GoogleMap = () => {
  return (
    <iframe
      className={styles.iframe}
      src="https://maps.google.com/maps?q=gdańsk&t=&z=5&ie=UTF8&iwloc=&output=embed"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
