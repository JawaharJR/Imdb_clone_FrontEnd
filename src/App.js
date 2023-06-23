import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>IMDb Clone</h1>
        <MovieList />
        <MovieForm />
      </div>
    </Provider>
  );
};

export default App;
