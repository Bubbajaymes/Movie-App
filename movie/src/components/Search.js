import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Search() {
  return (
    <div className='search'>
        <input type='text' placeholder='Search' />
        <i className="bi bi-search search-icon" style={{color: 'white'}}></i>
    </div>
  )
}
