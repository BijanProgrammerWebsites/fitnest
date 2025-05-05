"use client";

import { ReactElement, useState } from "react";

import DayComponent from "@/app/daily/components/day/day.component";

import styles from "./daily-tracker.module.css";

const ONE_DAY_IN_MILLISECONDS = 24 * 3600 * 1000;

export default function DailyTrackerComponent(): ReactElement {
  const [highlightedDate, setHighlightedDate] = useState<Date>(new Date());

  const dayClickHandler = (date: Date): void => {
    setHighlightedDate(date);
  };

  return (
    <div className={styles["daily-tracker"]}>
      <DayComponent
        date={new Date(+highlightedDate - 2 * ONE_DAY_IN_MILLISECONDS)}
        onClick={dayClickHandler}
      />
      <DayComponent
        date={new Date(+highlightedDate - ONE_DAY_IN_MILLISECONDS)}
        onClick={dayClickHandler}
      />
      <DayComponent
        date={highlightedDate}
        highlight
        onClick={dayClickHandler}
      />
      <DayComponent
        date={new Date(+highlightedDate + ONE_DAY_IN_MILLISECONDS)}
        onClick={dayClickHandler}
      />
      <DayComponent
        date={new Date(+highlightedDate + 2 * ONE_DAY_IN_MILLISECONDS)}
        onClick={dayClickHandler}
      />
    </div>
  );
}
