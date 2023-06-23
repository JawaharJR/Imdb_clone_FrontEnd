import axios from "axios";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/movies");
      dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error.message });
    }
  };
};

export const createMovie = (movie) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/movies", movie);
      dispatch({ type: "CREATE_MOVIE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CREATE_MOVIE_FAILURE", payload: error.message });
    }
  };
};

export const updateMovie = (movieId, updatedMovie) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/movies/${movieId}`, updatedMovie);
      dispatch({ type: "UPDATE_MOVIE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "UPDATE_MOVIE_FAILURE", payload: error.message });
    }
  };
};
