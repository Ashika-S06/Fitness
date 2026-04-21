import ActivityCard from "./ActivityCard";

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;