import { PropsWithChildren } from "react";
import styles from "../../styles/components/styles_wrappers/Container.module.scss";

export const Container = (props: PropsWithChildren) => {
  return <div className={styles.container}>{props.children} </div>;
};
