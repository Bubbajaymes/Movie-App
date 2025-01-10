import React from "react";

export default function NavItems({nav}) {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
}
