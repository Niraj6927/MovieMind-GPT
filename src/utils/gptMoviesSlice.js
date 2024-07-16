import { createSlice } from "@reduxjs/toolkit";

const gptMoviesSlice = createSlice({
  name: "gptMovie",
  initialState: {
    // GPTMoviesResult:null,
    tmdbMovieResult: null,
    gptResultName: null,
  },
  reducers: {
    addGPTMoviesResult: (state, action) => {
      const { tmdbMovieResult, gptResultName } = action.payload;
      state.gptResultName = gptResultName;
      state.tmdbMovieResult = tmdbMovieResult;
    },
  },
});

export const { addGPTMoviesResult } = gptMoviesSlice.actions;
export default gptMoviesSlice.reducer;
