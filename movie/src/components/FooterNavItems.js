import React from 'react'

export default function FooterNavItems({ name }) {
  return (
    <li>
        <i class="bi bi-forward"></i>{' '}
        <a href='#'>{name}</a>
    </li>
  )
}
