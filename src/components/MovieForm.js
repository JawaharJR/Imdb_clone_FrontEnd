import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "../actions/movieActions";

const MovieForm = () => {
  const dispatch = useDispatch();
  const producers = useSelector((state) => state.producers);
  const [name, setName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState("");
  const [producer, setProducer] = useState("");
  const [actors, setActors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMovie({ name, yearOfRelease, producer, actors }));
    // Reset form fields
    setName("");
    setYearOfRelease("");
    setProducer("");
    setActors([]);
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Year of Release:
          <input
            type="text"
            value={yearOfRelease}
            onChange={(e) => setYearOfRelease(e.target.value)}
            required
          />
        </label>
        <label>
          Producer:
          <select
            value={producer}
            onChange={(e) => setProducer(e.target.value)}
            required
          >
            <option value="">Select Producer</option>
            {producers.map((producer) => (
              <option key={producer._id} value={producer._id}>
                {producer.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Actors:
          <input
            type="text"
            value={actors}
            onChange={(e) => setActors(e.target.value.split(","))}
            required
          />
          <p>
            Enter actor names separated by commas (e.g., Actor1, Actor2, Actor3)
          </p>
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
