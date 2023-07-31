import React, { useState } from "react";
import "./App.css";

const initialTours = [
  {
    id: 1,
    name: "Tour 1",
    info: "This is the info for Tour 1.",
  },
  {
    id: 2,
    name: "Tour 2",
    info: "This is the info for Tour 2.",
  },
  {
    id: 3,
    name: "Tour 3",
    info: "This is the info for Tour 3.",
  },
];

const App = () => {
  const [tours, setTours] = useState(initialTours);

  const handleDelete = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div className="App">
      <h1>Tours Page</h1>
      {tours.length === 0 ? (
        <p>No tours available.</p>
      ) : (
        <ul>
          {tours.map((tour) => (
            <li key={tour.id}>
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <button onClick={() => handleDelete(tour.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setTours(initialTours)}>Reset</button>
    </div>
  );
};

export default App;
