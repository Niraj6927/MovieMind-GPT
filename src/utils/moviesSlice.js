import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMoviesTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
