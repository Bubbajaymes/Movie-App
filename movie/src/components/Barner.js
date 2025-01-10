import React, { useEffect, useState } from "react";
import bgImg from "../assets/bg-no-hard-feelings.jpeg";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieContent from "./MovieContent";
import MovieDate from "./MovieDate";
import MovieTrailer from "./MovieTrailer";
import MovieSwiper from "./MovieSwiper";

export default function Barner() {
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChanges = (id) => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };
  return (
    <div className="barner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie">
            <img
              src={movie.bgImg}
              alt="background image"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <MovieTrailer movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChanges} />
      )}
    </div>
  );
}
