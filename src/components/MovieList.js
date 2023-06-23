import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/movieActions";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h3>{movie.name}</h3>
          <p>Year of Release: {movie.yearOfRelease}</p>
          <p>Producer: {movie.producer.name}</p>
          <p>Actors: {movie.actors.map((actor) => actor.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
