import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";
import gptMovies from "./gptMoviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
    gptmovie: gptMovies,
  },
});

export default appStore;
