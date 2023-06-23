import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../actions/movieActions";

const EditMovieForm = ({ movie }) => {
  const dispatch = useDispatch();
  const producers = useSelector((state) => state.producers);
  const [name, setName] = useState(movie.name);
  const [yearOfRelease, setYearOfRelease] = useState(movie.yearOfRelease);
  const [producer, setProducer] = useState(movie.producer._id);
  const [actors, setActors] = useState(
    movie.actors.map((actor) => actor._id).join(",")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie(movie._id, { name, yearOfRelease, producer, actors }));
  };

  return (
    <div>
      <h2>Edit Movie</h2>
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
            onChange={(e) => setActors(e.target.value)}
            required
          />
          <p>
            Enter actor IDs separated by commas (e.g., actor1Id, actor2Id,
            actor3Id)
          </p>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditMovieForm;
