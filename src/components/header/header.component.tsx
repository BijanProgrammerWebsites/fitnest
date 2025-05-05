import { ReactElement } from "react";

import MingcuteMenuLine from "@/icons/MingcuteMenuLine";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  return (
    <div className={styles.header}>
      <MingcuteMenuLine className={styles.menu} />
      <div className={styles.greetings}>سلام، بیژن!</div>
      <div className={styles.status}>امروز 4 کار قابل‌انجام داری.</div>
    </div>
  );
}
