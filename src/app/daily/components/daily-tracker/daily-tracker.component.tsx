"use client";

import { ReactElement, useState } from "react";

import { AnimatePresence, LayoutGroup, Variants, motion } from "motion/react";

import DayComponent from "@/app/daily/components/day/day.component";

import styles from "./daily-tracker.module.css";

const ONE_DAY_IN_MILLISECONDS = 24 * 3600 * 1000;

export default function DailyTrackerComponent(): ReactElement {
  const [highlightedDate, setHighlightedDate] = useState<Date>(new Date());

  const dayClickHandler = (date: Date): void => {
    setHighlightedDate(date);
  };

  return (
    <LayoutGroup>
      <motion.div
        layout
        className={styles["daily-tracker"]}
        style={{ position: "relative" }}
      >
        <AnimatePresence mode="popLayout">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const date = new Date(
              +highlightedDate + offset * ONE_DAY_IN_MILLISECONDS,
            );

            const dayOfTheWeek = date.toLocaleDateString("fa-IR", {
              weekday: "long",
            });

            return (
              <motion.div
                key={dayOfTheWeek}
                layout
                transition={{ type: "tween" }}
                onClick={() => dayClickHandler(date)}
              >
                <DayComponent date={date} offset={offset} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
