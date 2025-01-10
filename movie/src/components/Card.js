import React, { useState } from "react";
import Modal from "./Modal";

export default function Card({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  return (
    <div className="col-lg-2 col-md-4 col-sm-5">
      <div className="movie-card">
        <img
          src={movie.previewImg}
          alt="Preview Image"
          className="image-fluid"
        />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icon">
            <i class="bi bi-plus"></i>
            <i className="bi bi-play-circle" onClick={toggleModal}></i>
          </div>
          {movie.active && (
            <Modal movie={movie} status={modal} toggleModal={toggleModal} />
          )}
        </div>
      </div>
    </div>
  );
}
