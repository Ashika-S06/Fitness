import { useContext, useEffect } from "react";
import { ActivityContext } from "../context/ActivityContext";

const ActivityStats = () => {
  const { activities } = useContext(ActivityContext);

  const total = activities.length;

  const goalAchieved = activities.filter((a) => a.completed).length;
  const goalNotAchieved = total - goalAchieved;

  useEffect(() => {
    window.appState = {
      totalActivities: total,
      goalAchieved,
      goalNotAchieved,
    };
  }, [activities]);

  return (
    <div>
      <h2 data-testid="total-activities">{total}</h2>
      <h2 data-testid="goal-achieved">{goalAchieved}</h2>
      <h2 data-testid="goal-not-achieved">{goalNotAchieved}</h2>
    </div>
  );
};

export default ActivityStats;