import React, { useEffect, useRef } from "react";

export default function Modal({ movie, status, toggleModal }) {
  const iframeRef = useRef();

  useEffect(() => {
    if (!status && iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  }, [status]);

  return (
    <div className={` movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <i className="bi bi-x"></i>
      </a>
      {status && (
        <iframe
          ref={iframeRef}
          width="900"
          height="500"
          src={movie.video}
          title={`${movie.title} | Official Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}
