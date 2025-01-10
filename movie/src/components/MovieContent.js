import React from "react";
import Button from "./Button";

export default function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? 'active' : undefined}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>
      {movie.description}
      </p>
      <div className="button-container">
  <Button
    icon={<i className="bi bi-bookmark"></i>}
    name="Book"
    color="#ff3700"
    bgColor="#fff"
  />
  <Button
    icon={<i className="bi bi-plus"></i>}
    name="My List"
  />
</div>

    </div>
  );
}
