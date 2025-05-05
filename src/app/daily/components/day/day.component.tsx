import { ReactElement } from "react";

import { TargetAndTransition, motion } from "motion/react";

import clsx from "clsx";

import MingcuteCheckLine from "@/icons/MingcuteCheckLine";
import MingcuteUpSmallFill from "@/icons/MingcuteUpSmallFill";

import styles from "./day.module.css";

const TODAY_OFFSET_TOLERANCE = 3600 * 1000;

const rightVariant: TargetAndTransition = { x: 100, opacity: 0 };
const leftVariant: TargetAndTransition = { x: -100, opacity: 0 };

type Props = {
  date: Date;
  offset: number;
  highlight?: boolean;
  onClick?: (date: Date) => void;
};

export default function DayComponent({
  date,
  offset,
  highlight,
  onClick,
}: Props): ReactElement {
  const today = new Date();
  const isToday = Math.abs(+date - +today) < TODAY_OFFSET_TOLERANCE;

  const dayOfTheWeek = date.toLocaleDateString("fa-IR", { weekday: "long" });
  const dayOfTheMonth = date.toLocaleDateString("fa-IR", { day: "numeric" });

  return (
    <motion.div
      className={clsx(styles.day, highlight && styles.highlight)}
      onClick={() => onClick?.(date)}
      initial={offset === -2 ? rightVariant : leftVariant}
      animate={{ x: 0, opacity: 1 }}
      exit={offset === -2 ? rightVariant : leftVariant}
      transition={{ type: "tween" }}
    >
      <div className={styles["status-indicator"]}>
        <MingcuteCheckLine />
      </div>
      <div className={styles["day-of-the-week"]}>{dayOfTheWeek}</div>
      <div className={styles["day-of-the-month"]}>{dayOfTheMonth}</div>
      {false && (
        <div className={styles["today-indicator"]}>
          <MingcuteUpSmallFill />
        </div>
      )}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
      {/*<div className={styles}></div>*/}
    </motion.div>
  );
}
