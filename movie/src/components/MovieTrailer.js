import React, { useState } from "react";
import Modal from "./Modal";

export default function MovieTrailer({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault(); 
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <a href="" className="playBtn" onClick={toggleModal}>
          <i className="bi bi-play-circle"></i>
        </a>
        <p>Watch Trailer</p>
      </div>
      {
        movie.active && <Modal movie={movie} status={modal} toggleModal = {toggleModal}/>
      }
      
    </>
  );
}
