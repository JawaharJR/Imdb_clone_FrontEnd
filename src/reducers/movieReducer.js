const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return { ...state, movies: action.payload, loading: false, error: null };
    case "FETCH_MOVIES_FAILURE":
      return { ...state, movies: [], loading: false, error: action.payload };
    case "CREATE_MOVIE_SUCCESS":
      return {
        ...state,
        movies: [...state.movies, action.payload],
        loading: false,
        error: null,
      };
    case "CREATE_MOVIE_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_MOVIE_SUCCESS":
      const updatedMovies = state.movies.map((movie) => {
        if (movie._id === action.payload._id) {
          return action.payload;
        } else {
          return movie;
        }
      });
      return { ...state, movies: updatedMovies, loading: false, error: null };
    case "UPDATE_MOVIE_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
