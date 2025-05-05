import DailyTrackerComponent from "@/app/daily/components/daily-tracker/daily-tracker.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <DailyTrackerComponent />
    </div>
  );
}
