import React from 'react'

export default function TrendCard({ slide }) {
  return (
    <div className='trend-card'>
      <img src={slide.previewImg} alt=''  className='img-fluid'/>
      <a href='#'>Add to calendar <i class="bi bi-calendar"></i></a>
    </div>
  )
}
