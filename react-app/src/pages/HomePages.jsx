import { useContext, useState } from "react";
import { ActivityContext } from "../context/ActivityContext";
import ActivityList from "../components/ActivityList";

const HomePages = () => {
  const { activities, loading } = useContext(ActivityContext);
  const [filter, setFilter] = useState("");

  if (loading) return <h2>Loading...</h2>;

  const filtered = activities.filter((a) =>
    a.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        data-testid="filter-input"
        placeholder="Filter activities"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ActivityList activities={filtered} />
    </div>
  );
};

export default HomePages;