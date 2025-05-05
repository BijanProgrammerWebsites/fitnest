import { ReactElement } from "react";

import clsx from "clsx";

import MingcuteCheckLine from "@/icons/MingcuteCheckLine";
import MingcuteUpSmallFill from "@/icons/MingcuteUpSmallFill";

import styles from "./day.module.css";

const TODAY_OFFSET_TOLERANCE = 3600 * 1000;

type Props = {
  date: Date;
  highlight?: boolean;
  onClick?: (date: Date) => void;
};

export default function DayComponent({
  date,
  highlight,
  onClick,
}: Props): ReactElement {
  const today = new Date();
  const isToday = Math.abs(+date - +today) < TODAY_OFFSET_TOLERANCE;

  return (
    <div
      className={clsx(styles.day, highlight && styles.highlight)}
      onClick={() => onClick?.(date)}
    >
      <div className={styles["status-indicator"]}>
        <MingcuteCheckLine />
      </div>
      <div className={styles["day-of-the-week"]}>
        {date.toLocaleDateString("fa-IR", { weekday: "long" })}
      </div>
      <div className={styles.date}>
        {date.toLocaleDateString("fa-IR", { day: "numeric" })}
      </div>
      {isToday && (
        <div className={styles["today-indicator"]}>
          <MingcuteUpSmallFill />
        </div>
      )}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
    </div>
  );
}
