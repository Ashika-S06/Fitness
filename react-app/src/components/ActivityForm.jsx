import React, { useState } from "react";

const ActivityForm = ({ addActivity }) => {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    calories: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addActivity({
      ...form,
      id: Date.now(),
      duration: Number(form.duration),
      calories: Number(form.calories)
    });

    setForm({
      name: "",
      duration: "",
      calories: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Activity"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="duration"
        placeholder="Duration (mins)"
        value={form.duration}
        onChange={handleChange}
      />

      <input
        name="calories"
        placeholder="Calories"
        value={form.calories}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;