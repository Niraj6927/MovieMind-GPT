import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="-mt-64 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Populer on Netflix"}
            movies={movies.nowPopularMovies}
          />
          <MovieList
            title={"Top Rated Movie"}
            movies={movies.nowTopRatedMovies}
          />
          <MovieList
            title={"Upcomming Movie"}
            movies={movies.nowUpcomingMovies}
          />

          {/* 
          MovieList - Popular
             MovieCard * n
          MovieList - NowPlaying
          MovieList - Trending
          MovieList - Horror

      */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
