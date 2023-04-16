import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

export default function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_column">
        <h3 className="movie_title">{title}</h3>
        <h5 className="year">{year}</h5>
        <p className="summary">{summary.slice(0, 200)}...</p>
        <ul className="genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
