import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  const { movie } = props;
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt='Movie Poster' />
        <p>
          <strong>Released:</strong> {movie.Released}<br />
          <strong>Directed By:</strong> {movie.Director}<br />
          <em>Genre: </em>{movie.Genre}
        </p>
        <p>{movie.Plot}</p>
      </div>
    </section>
  );
};

export default Movie;


