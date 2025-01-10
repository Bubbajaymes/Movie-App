import React from 'react'

export default function BackToTop({ scroll }) {
    const backToTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <a className={`back-to-top ${scroll > 100 ? 'active' : ''}`} onClick={backToTop}>
    <i class="bi bi-arrow-up"></i>
    </a>
  )
}
