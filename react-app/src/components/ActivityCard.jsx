const ActivityCard = ({ activity }) => {
  return (
    <div data-testid="activity-item">
      <h3>{activity.name}</h3>
      <p>{activity.duration}</p>
    </div>
  );
};

export default ActivityCard;